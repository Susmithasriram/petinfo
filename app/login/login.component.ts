import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


declare var gapi : any ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private auth: any;


emailId :any ;
password  :any ;
users : any ;
  loginId: any;

  constructor(private router : Router , private uservice : UserService) {
this.emailId='';
this.password='';
   

  }

ngOnInit() {
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '709457981342-vmq5f3onjfpmal4f1l88u4tl68qg72im.apps.googleusercontent.com'
    });
  });
}

signInWithGoogle() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then((googleUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; }) => {
    const idToken = googleUser.getAuthResponse().id_token;
   
  });
}


// submitForm(loginForm:any){
  
//   // if(loginForm.emailId === "HR" && loginForm.password === "HR"){
//   //   alert("LOGIN SUCCESS")
//   // }else{
//     this.users.forEach((user:any) => {

//       if(loginForm.emailId == user.emailId && loginForm.password == user.password){
        
//         alert("Welcome to Employee Page") 
        
//       }})


  loginSubmit(){
    if(this.loginId != null && this. password !=null){
      
      this.router.navigate(['home'])
      alert('Login succesfull')
    }else{
      // alert('enter the email or password')
      alert('enter the email or password')
      this.router.navigate(['register'])
    }
    
  


}
}
