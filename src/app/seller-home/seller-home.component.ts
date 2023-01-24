import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | product[];
  deleteMsg: undefined | string;
  constructor(private product: ProductService) {}
  ngOnInit() {
this.listProduct();
  }
  deleteProduct(id: number) {
    this.product.deleteProducct(id).subscribe((res) => {
      if (res) {
        this.deleteMsg = 'Product id deleted';
        this.listProduct();

      }
    });
    setTimeout(()=>{
      this.deleteMsg=undefined
    },3000)
  }
  listProduct(){
    this.product.productList().subscribe((result) => {
      this.productList = result;
    });
  }
}
