import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string=' ';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      // console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.log('in seller area');
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            // console.warn(sellerStore);
            this.sellerName = sellerStore && JSON.parse(sellerStore)[0]?.name;
            console.warn(this.sellerName);
          }
        } else {
          // console.log('out side seller');
          this.menuType = 'default';
        }
      }
    });
  }
  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
