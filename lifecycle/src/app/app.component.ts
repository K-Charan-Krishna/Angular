import { Component } from '@angular/core';
import { userservices } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userservices]
})
export class AppComponent {
  // userInput:string = '';
  // destroyv:boolean=true
  constructor(private userservices:userservices) { 
    console.log(this.users,'in cons')
  }
  users:{name:string,status:string}[]=[]

  ngOnInit(){   
    this.users=this.userservices.user
    console.log(this.users)
  }
  datafromChild(event:{name:string,status:string}){
      this.users=[...this.users,event]
      console.log(this.users)
  }
}
  
  // getInput(input:HTMLInputElement){
  //       this.userInput=input.value
  // }

  // destroy(){
  //   this.destr