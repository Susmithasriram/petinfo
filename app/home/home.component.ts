import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dog: any;
  cat: any;
  bulldog: any;
  beagal: any;
  chihuahua: any;
  rottwiler: any;
  golden: any;
  constructor(private router : Router) {
  
    
  }
  onLogout(){
    localStorage.removeItem('token');
    // console.log("you are logged out !");
    this.router.navigate(['login']);
  }

  homepage(){
    this.router.navigate(['home'])
    }

    foodpage(){
      this.router.navigate(['food'])
      }

      docpage(){
        this.router.navigate(['doctor'])
        }

  dogpage(){
    this.router.navigate(['dog']);
  
  }
  catpage(){
    this.router.navigate(['cat']);
  
  }
  rabbitpage(){
    this.router.navigate(['rabbit']);
  
  }
  birdpage(){
    this.router.navigate(['birds']);
  
  }
  about(){
    this.router.navigate(['about'])
  }
search(){
  if(this.dog==this.dog){
    this.router.navigate(['dog'])
  }
  else if(this.cat==this.cat){
    this.router.navigate(['cat'])
  }
  else if(this.bulldog==this.bulldog){
    this.router.navigate(['bulldog'])
  }
  else if(this.beagal==this.beagal){
    this.router.navigate(['beagal'])
  }
  
}
}
