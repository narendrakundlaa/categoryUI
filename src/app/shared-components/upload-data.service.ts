import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UploadDataService {

  fileUploadUrl: string = environment.baseUrl + 'categories/products';
  constructor(private httpClient: HttpClient) { }

  sendFiles(event,name) {
    const formData = new FormData();
    console.log('1', event.target.file);
    console.log('2', event.target.files[0])
    formData.append('file', event.target.files[0]);
    formData.append('name', name);

    return this.httpClient.post(this.fileUploadUrl, formData);
  }
}
