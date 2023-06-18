import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent {

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
