import { Component, OnInit } from '@angular/core';
import { Products } from '../services/product.service';

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

interface Product {
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



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
 
  cart:Product[]=[]
  constructor(private product:Products) { }

  ngOnInit(): void {
    this.cart=this.product.cart
  }
  
  ngDoCheck(){
      this.cart=this.product.cart
  }

  removeItem(id:number){
  this.product.removeFromCart(id)
  console.log(this.cart)
  }
}
