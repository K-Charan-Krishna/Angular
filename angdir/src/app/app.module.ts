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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    AngtrfComponent,
    LifecycleComponent,
    MouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
