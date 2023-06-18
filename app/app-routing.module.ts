import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BeagalComponent } from './beagal/beagal.component';
import { BirdsComponent } from './birds/birds.component';
import { BulldogComponent } from './bulldog/bulldog.component';
import { CatComponent } from './cat/cat.component';
import { DocterComponent } from './docter/docter.component';
import { DogComponent } from './dog/dog.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'', component:LoginComponent},
{path:'login', canActivate:[AuthGuard],component:LoginComponent},
{path:'register',  component:RegisterComponent},
{path:'home',  component:HomeComponent},
{path:'dog',  component:DogComponent},
{path:'cat',  component:CatComponent},
{path:'home/doctor',  component:DocterComponent}, 
{path:'food',  component:FoodComponent}, 
{path:'rabbit',  component:RabbitComponent},
{path:'birds',  component:BirdsComponent},
{path:'bulldog',  component:BulldogComponent},
{path:'beagal',  component:BeagalComponent},
{path:'payment',  component:PaymentComponent},
{path:'about',  component:AboutComponent},]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
