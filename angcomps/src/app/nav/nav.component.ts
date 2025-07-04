import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-nav]',
  selector: 'app-nav',
  // selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  values:string=""
  ngOnInit(): void {
    console.log(this.values)
  }
 
  // inputData(event:any){
  //    this.values=event.target.value
  //    console.log(this.values)
  // }

}
