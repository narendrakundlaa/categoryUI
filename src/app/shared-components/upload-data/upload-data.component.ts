import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { UploadDataService } from '../upload-data.service';
// import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css'],
  providers: [MessageService]

})
export class UploadDataComponent implements OnInit {
  event: any;
  constructor(private messageService: MessageService, private uploadDataService: UploadDataService) { }

  ngOnInit() {
  }

  // onUpload(event) {
  //   for (let file of event.files) {
  //     console.log(file.accept);
  //     this.uploadedFiles.push(file);
  //   }
  //   // const formData = new FormData();
  //   // formData.append('file', event.target.file);
  //   // this.uploadDataService.sendFiles(formData).subscribe(data => { });
  //   // alert('Data sublited successfully...')
  //   this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  //   this.uploadedFiles.length = 0;
  // }

  fileChane(event) {
    // debugger;
    this.event = event;
    this.uploadDataService.sendFiles(this.event).subscribe((data: any) => {
      console.log(data);
      console.log(data.statusCode);
      if (data.statusCode == 200) {
        alert('File is submited successfully...');
        this.event = '';
      } else {
        alert('Server issue: file uploading failed, please try again..');
      }
    });

  }

}
