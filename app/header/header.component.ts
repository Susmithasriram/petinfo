import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router : Router) {
  
    
  }
  homepage(){
    this.router.navigate(['home'])
    }

    foodpage(){
      this.router.navigate(['food'])
      }

  dogpage(){
    this.router.navigate(['dog']);
  
  }

}

