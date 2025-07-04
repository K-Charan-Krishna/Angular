import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   mernSkills = [
  {id:1,name: 'MongoDB',type: 'Database',status:"In Progress",skills: ['Document-oriented NoSQL design','CRUD operations','Aggregation framework','Mongoose ODM','Schema design & validation']},
  {id:2,name: 'Express.js',type: 'Backend Framework',status:"Completed",skills: ['RESTful API development','Middleware usage','Routing & request handling','Error handling','Authentication with Passport/JWT']},
  {id:3,name: 'React.js',type: 'Frontend Library',status:"Completed",skills: ['JSX and component lifecycle','Hooks (useState, useEffect, etc.)','State management (Context, Redux)','Routing with React Router','Form handling & validation']},
  {id:4, name: 'Node.js',type: 'Runtime Environment',status:"In Progress",skills: ['Event loop and async programming','File system operations','npm package management','Environment variables','API integration and web server creation']}
];

  head:string="Hi i am an IT Inten"
  hide:boolean=false
  slogen(){
    return "Let's Game Begin....."
  }
  // buttonClick(){
  //   this.hide=!this.hide
  // }
  notifyClicke(id:number){
    // this.hide=true
    this.mernSkills=this.mernSkills.filter(each=>each.id!=id)
  }
}
