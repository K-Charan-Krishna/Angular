import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Products } from '../services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  cartLength:number=0
  inputSearch:string=""
  isSidebarVisible:boolean=true

  constructor(private product:Products) { }

  ngOnInit(): void {
    this.product.sidebar$.subscribe(val=>{
    this.isSidebarVisible=val
    console.log(this.isSidebarVisible,'from nav')
    })
    
  }

  ngDoCheck(){
    this.cartLength=this.product.getCartLength()
  }


  
  @Output() searched: EventEmitter<string>= new EventEmitter <string>();

  theEmit():void{
    this.searched.emit(this.inputSearch)
  }

  showSideBar(){
    this.product.handelSideBar()
  }
}
