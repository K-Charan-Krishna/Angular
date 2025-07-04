import { Component, OnInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-angtrf',
  templateUrl: './angtrf.component.html',
  styleUrls: ['./angtrf.component.css']
})
export class AngtrfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue:any;

  handel(ele:HTMLInputElement){
    console.log(ele.value)
  }

  @Input() age!:number;

  calculate(){
    console.log(this.age)
  }
}
