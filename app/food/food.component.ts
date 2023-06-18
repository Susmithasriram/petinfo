import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  constructor(private router : Router) {
  
    
  }
  
  homepage(){
    this.router.navigate(['home'])
    }

    foodpage(){
      this.router.navigate(['food'])
      }

 
}
