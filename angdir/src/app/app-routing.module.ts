import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {CartComponent } from './cart/cart.component'
import {ProductdetailsComponent} from './productdetails/productdetails.component'
import { routeguard } from './services/routeguard.service';
import {ProtectrouteService} from './protectroute.service'
import { LoginComponent} from './login/login.component'
import {ProductsComponent} from './products/products.component'
import {InsertproductComponent} from './insertproduct/insertproduct.component'
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'allproduct',component:ProductsComponent,canActivate:[ProtectrouteService]},
  {path:'home',component:HomeComponent,canActivate:[ProtectrouteService]},
  {path:'cart',component:CartComponent ,canActivate:[ProtectrouteService] },
  {path:'product/:id',component:ProductdetailsComponent,
    canDeactivate:[routeguard],
    canActivate:[ProtectrouteService]},
  {path:'insertproduct',component:InsertproductComponent,canActivate:[ProtectrouteService]},
  {path:'register',component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
