import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg:string|undefined;
 constructor(private product:ProductService){}
 submit(data:product){
    // console.log(data);
    this.product.addProduct(data).subscribe((res)=>{
      // console.log(res);
      if(res){
        this.addProductMsg="product is successfully added";
      }
      setTimeout(()=>(this.addProductMsg=undefined),3000)
      // alert("prodoct added successfully")
      
    });
  }
}
