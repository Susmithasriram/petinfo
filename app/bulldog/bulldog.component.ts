import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulldog',
  templateUrl: './bulldog.component.html',
  styleUrls: ['./bulldog.component.css']
})
export class BulldogComponent {

  constructor(private router : Router) {
  
    
  }
  homepage(){
    this.router.navigate(['home'])
    }

    foodpage(){
      this.router.navigate(['food'])
      }

  


}
