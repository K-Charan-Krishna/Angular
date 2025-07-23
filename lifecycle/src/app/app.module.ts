import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ReactComponent } from './react/react.component';
import { InputComponent } from './input/input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { loggermsg } from './services/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    JavascriptComponent,
    ReactComponent,
    InputComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [loggermsg],
  bootstrap: [AppComponent]
})
export class AppModule { }
