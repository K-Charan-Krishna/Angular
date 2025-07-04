import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputSearch:string=""
  
  @Output() searched: EventEmitter<string>= new EventEmitter <string>();

  theEmit(){
    this.searched.emit(this.inputSearch)
  }



}
