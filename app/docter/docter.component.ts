import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docter',
  templateUrl: './docter.component.html',
  styleUrls: ['./docter.component.css']
})
export class DocterComponent {
  constructor(private router : Router) {
  
    
  }
  homepage(){
  this.router.navigate(['home'])
  }
  foodpage(){
    this.router.navigate(['food'])
    }
    paymentHandler:any = null;

    ngOnInit() {
      this.invokeStripe();
    }
    
    initializePayment(amount: number) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log({stripeToken})
          alert('payment is successful!');
          
        }
        
      });
    
      paymentHandler.open({
        name: 'PetInfo',
        description: 'You are contacting a Best Doctor',
        amount: amount * 100
      });
     this.router.navigate(['payment'])
    }
    
    invokeStripe() {
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken)
              alert('Payment has been successfull!');
      
            }
            
          });
  
        
        }
        window.document.body.appendChild(script);
        
      }
    }

}


