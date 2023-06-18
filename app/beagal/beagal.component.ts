import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beagal',
  templateUrl: './beagal.component.html',
  styleUrls: ['./beagal.component.css']
})
export class BeagalComponent {
  constructor(private router : Router) {
  
    
  }
  homepage(){
    this.router.navigate(['home'])
    }

    foodpage(){
      this.router.navigate(['food'])
      }


}
