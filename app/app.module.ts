import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { BirdsComponent } from './birds/birds.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DocterComponent } from './docter/docter.component';
import { ProfileComponent } from './profile/profile.component';
import { FoodComponent } from './food/food.component';
import { BulldogComponent } from './bulldog/bulldog.component';
import { BeagalComponent } from './beagal/beagal.component';
import { VideoComponent } from './video/video.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    DogComponent,
    CatComponent,
    RabbitComponent,
    BirdsComponent,
    DocterComponent,
    ProfileComponent,
    FoodComponent,
    BulldogComponent,
    BeagalComponent,
    VideoComponent,
    PaymentComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    SocialLoginModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
