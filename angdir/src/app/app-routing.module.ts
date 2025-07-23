import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {CartComponent } from './cart/cart.component'
import {ProductdetailsComponent} from './productdetails/productdetails.component'
import { routeguard } from './services/routeguard.service';
import { LoginComponent} from './login/login.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent },
  {path:'product/:id',component:ProductdetailsComponent ,canDeactivate:[routeguard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
