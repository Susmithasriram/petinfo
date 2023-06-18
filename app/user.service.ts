import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  setLoginStatus(){
    this.loginStatus = true;
  }


  private loginStatus: boolean;
  private logoutStatus: boolean;


  constructor(private httpClient:HttpClient) {
    this.loginStatus = false;
    this.logoutStatus = true;
    
   }

   registerUser(user : any){
    console.log(user);
    
    // alert("User registration Came to Service ")
    return this.httpClient.post('/registerUser',user);
  }

  getLoginStatus(){
    return this.loginStatus;
   }
  
   setLogoutStatus(){
    this.loginStatus = false;
   }
}