import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  onSubmit(){
    console.log('form submited')
  }
}
