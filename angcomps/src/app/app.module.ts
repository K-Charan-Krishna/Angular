import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { container } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SetBg } from './customDirective/setBg.directive';
import { HighlightDirective } from './customDirective/highlight.directive';
import { MouseDirective } from './mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    container,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CardComponent,
    SetBg,
    HighlightDirective,
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
