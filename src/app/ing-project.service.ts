import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catagiries } from './models/catagiries.model';
import { ProductList } from './models/products.model';


@Injectable({
  providedIn: 'root'
})
export class IngProjectService {


  catagiriesUrl: string = 'http://10.117.189.179:7770/bank/categories';

  constructor(private httpClient: HttpClient) { }
  getCatagiries(): Observable<Catagiries[]> {
    return this.httpClient.get<Catagiries[]>(this.catagiriesUrl)
  }
  getCatagiriesById(id: number): Observable<Catagiries> {
    return this.httpClient.get<Catagiries>(`${this.catagiriesUrl}/${id}`)
  }

  getproducts(cate_id): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>('http://10.117.189.179:7770/bank/categories/' + cate_id)
  }
}
