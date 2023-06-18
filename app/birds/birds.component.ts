import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent {

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
