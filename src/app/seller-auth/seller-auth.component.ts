import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SingUp } from '../datatype';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}
  isLogin = false;
  errorMsg = ""
  signUp(data: SingUp): void {
    // console.log(data);
    this.seller.sellerSingUp(data);
  }
  logIn(data: SingUp){
    this.errorMsg="";
    this.seller.sellerLogIn(data);
    if(this.seller.isLoginError){
      this.errorMsg="email or password invalid";

    }
    }
  ngOnInit(): void {
    this.seller.reloaSeller();
  }
  openLogin() {
    this.isLogin = false;
  }
  openSingUP() {
    this.isLogin = true;
  }

}
