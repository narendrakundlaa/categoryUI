import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catagiries } from './models/catagiries.model';
import { ProductList } from './models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngProjectService {

  /**category Api */
  catagiriesUrl: string = environment.baseUrl + 'categories';

  constructor(private httpClient: HttpClient) { }

  /** retrive categories */
  getCatagiries(): Observable<Catagiries[]> {
    return this.httpClient.get<Catagiries[]>(this.catagiriesUrl)
  }
  getCatagiriesById(id: number): Observable<Catagiries> {
    return this.httpClient.get<Catagiries>(`${this.catagiriesUrl}/${id}`)
  }
  /** retrive products */
  getproducts(cate_id): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>(environment.baseUrl + 'categories/' + cate_id)
  }
  /** */
  getproductsDetails(cate_id): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>(environment.baseUrl + 'products/' + cate_id)
  }
}
