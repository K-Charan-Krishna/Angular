import { Component, OnInit ,Input} from '@angular/core';

interface Product{
    id: number,
    name: string,
    price: number,
    inStock: boolean,
    category: string,
    rating: number,
    imageUrl: string

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
   @Input() items: Product = {
    id: 0,
    name: '',
    price: 0,
    inStock: false,
    category: '',
    rating: 0,
    imageUrl: ''
  };
}
