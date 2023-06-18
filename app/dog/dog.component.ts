import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {

  constructor(private router : Router) {
  
    
  }
  homepage(){
    this.router.navigate(['home'])
    }
    foodpage(){
      this.router.navigate(['food'])
      }

  

  bulldog(){
    this.router.navigate(['bulldog']);
  
  }
  begdog(){
    this.router.navigate(['beagal']);
  
  }

}
