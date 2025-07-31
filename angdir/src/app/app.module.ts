import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { AngtrfComponent } from './angtrf/angtrf.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MouseDirective } from './customdirective/mouse.directive';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {Products} from './services/product.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { routeguard } from './services/routeguard.service';
import { Discountpipe } from './discount.pipe';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { InsertproductComponent } from './insertproduct/insertproduct.component';
import { RegisterComponent } from './register/register.component';
import { AdminAcessComponent } from './admin-acess/admin-acess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    AngtrfComponent,
    LifecycleComponent,
    MouseDirective,
    CartComponent,
    HomeComponent,
    SidebarComponent,
    ProductdetailsComponent,
    Discountpipe,
    FilterPipe,
    LoginComponent,
    ProductsComponent,
    InsertproductComponent,
    RegisterComponent,
    AdminAcessComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Products,routeguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
