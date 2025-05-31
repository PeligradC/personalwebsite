import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProduct } from '../product.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct()
  {
    //console.log(`${environment.baseURL}`)
    return this.http.get<GetProduct>(`${environment.baseURL}`)
  }

  getProductById(id: number) {
    return this.http.get(`${environment.baseURL}/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.baseURL}/delete/${id}`);
  }
}
