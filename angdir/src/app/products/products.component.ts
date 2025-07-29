import { Component, Injectable,OnInit } from '@angular/core';
import {Products} from '../services/product.service'
import {Router } from '@angular/router';
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


@Injectable()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    product:Product[]=[]
    searchedItem:string=''
    sidebar:boolean=false
    spinner:boolean=true
  constructor(private products:Products , private router:Router) { }

  ngOnInit(): void {
    this.products.fetchProducts().then(() => {
      this.products.sidebar$.subscribe((value)=>{
        this.sidebar=value
      })
      this.products.spinner$.subscribe((val)=>{
        this.spinner=val
      })
      this.products.product$.subscribe((value)=>{
        this.product=value;
      }) 
    }); 
  }

  getTheInput(item:string){
     this.searchedItem=item
  }

}
