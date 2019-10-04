import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadFile } from '../models/upload.model';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UploadDataService {

  fileUploadUrl: string = environment.baseUrl + 'products';
  constructor(private httpClient: HttpClient) { }

  sendFiles(event) {
    const formData = new FormData();
    console.log('1', event.target.file);
    console.log('2', event.target.files[0])
    formData.append('file', event.target.files[0]);

    return this.httpClient.post(this.fileUploadUrl, formData);
  }
}
