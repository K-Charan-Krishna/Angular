import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'

const routes: Routes = [
  {path:'',component:HomeComponent},  //defualt
  {path:'about',component:AboutComponent}, //about
  {path:'contact',component:ContactComponent},  // /contact
  {path:'**',redirectTo:""}    // redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
