import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent implements OnInit{

  constructor(private service :UserService, private router : Router) {
  }
  ngOnInit(): void {
    
  }
  

  

  register(user: any) {
    console.log(user);
    // alert("User registration Came to TS");
    this.service.registerUser(user).subscribe(() => {
      alert('register done')
    });
    this.router.navigate(['home'])
  }


  // homeregister(){
  // this.router.navigate(['home']);

}