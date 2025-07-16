import { Component, OnInit } from '@angular/core';
import {Products} from '../services/product.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  category:string=''
  priceSort:string=''

  constructor(private products:Products) { }

  ngOnInit(): void {
  }

  sendCategory(event:Event){
    this.category=(event.target as HTMLSelectElement).value
    this.products.getCategory(this.category)
  }

  sendPriceSort(event:Event){
    this.priceSort=(event.target as HTMLSelectElement).value
    this.products.getPriceSort(this.priceSort)
  }
}
