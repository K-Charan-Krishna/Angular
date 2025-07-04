import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput:string = '';
  destroyv:boolean=true
  getInput(input:HTMLInputElement){
        this.userInput=input.value
  }

  destroy(){
    this.destroyv=false
  }
}
