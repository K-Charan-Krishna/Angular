import { Component, OnInit ,Input} from '@angular/core';
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  database!:string
  constructor(private productinj:Products) { }

  ngOnInit(): void {
    this.database='http://localhost:3000'
  }
   @Input() items!:Product;
  addToCart(id:number){
      this.productinj.addToCart(id)
  }
}
