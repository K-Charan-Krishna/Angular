import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface CardData {
    type: string,
    projectName: string,
    description: string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() clicked= new EventEmitter<string>();

  onHandel(){
    this.clicked.emit("from ChildClass")
  }


  @Input() data:CardData={type:'',projectName:'',description:""};
  // @Input() All:CardData[]=[]
  // @Input() Static:CardData[]=[]
  // @Input() Responsive:CardData[]=[]
  // @Input() Dynamic:CardData[]=[]
  @Input() projectCount:number=0
}
