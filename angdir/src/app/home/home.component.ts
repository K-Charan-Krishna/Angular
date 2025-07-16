import { Component, Injectable, OnInit } from '@angular/core';
import {Products} from '../services/product.service'
import { flatMap } from 'rxjs';

// interface Category {
//   id: number;
//   name: string;
//   image: string;
//   slug: string;
// }
//  interface Product {
//   id: number;
//   title: string;
//   slug: string;
//   price: number; // <-- Fixed typo here
//   description: string;
//   category: Category;
//   images: string[];
// }

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:Product[]=[]
  searchedItem:string=''
  sidebar:boolean=false
  spinner:boolean=true
  constructor(private products:Products) { }


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
  ngDoCheck():void{
    console.log(this.sidebar,'from home')
  }
   
  getTheInput(item:string){
     this.searchedItem=item
  }
}
// function ngDoCheck() {
//   throw new Error('Function not implemented.');
// }

