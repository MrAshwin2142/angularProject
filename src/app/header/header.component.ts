import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: string = 'default';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      // console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('in seller area');
          this.menuType = 'seller';
        } else {
          console.log('out side seller');
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
