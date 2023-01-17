import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogIn, SingUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  sellerSingUp(data: SingUp) {
    this.http
      .post('http://localhost:3000/sellers', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        // console.log(result);
      });
    return false;
  }
  sellerLogIn(data: SingUp) {
    this.http
      .get(
        `http://localhost:3000/sellers?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.body && res.body.length) {
          console.log('userloggedin');
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        } else {
          console.log('login fail');
          this.isLoginError.emit(true);
        }
      });

    return false;
  }
  reloaSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
