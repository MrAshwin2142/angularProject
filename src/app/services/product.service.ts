import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(data: product) {
    // console.log(data);
    return     this.http
    .post('http://localhost:3000/product', data, {
      observe: 'response',
    })}
    productList(){
      return this.http.get<product[]>('http://localhost:3000/product');
    }
    deleteProducct(id:number){
      return this.http.delete(`http://localhost:3000/product/${id}`);
    }
}
