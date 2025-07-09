import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  name:string=''
  status:string='Active'
  @Output() clicked=new EventEmitter <{name:string,status:string}>();
  ngOnInit(): void {
  }
  // ngDoCheck(){
  //   console.log('event occur')
  // }
  statusvalue(event:Event){
      this.status=(event.target as HTMLSelectElement).value
      // console.log(this.status)
  }
  gettingInput(){
    const userData ={
      name:this.name,
      status:this.status
    }
    this.clicked.emit(userData)
  }
  }