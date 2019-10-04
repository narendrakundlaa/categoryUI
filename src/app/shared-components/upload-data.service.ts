import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadFile } from '../models/upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadDataService {

  fileUploadUrl: string = 'http://10.117.189.179:7770/bank/categories/products';
  constructor(private httpClient: HttpClient) { }

  sendFiles(event) {
    const formData = new FormData();
    console.log('1', event.target.file);
    console.log('2', event.target.files[0])
    formData.append('file', event.target.files[0]);

    return this.httpClient.post(this.fileUploadUrl, formData);
  }
}
