import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [Products,routeguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
