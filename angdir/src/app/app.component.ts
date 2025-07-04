import { Component ,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 29.99,
    inStock: true,
    category: 'Electronics',
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/150?text=Mouse'
  },
  {
    id: 2,
    name: 'Bluetooth Speaker',
    price: 59.99,
    inStock: false,
    category: 'Audio',
    rating: 4.2,
    imageUrl: 'https://via.placeholder.com/150?text=Speaker'
  },
  {
    id: 3,
    name: 'Gaming Keyboard',
    price: 89.99,
    inStock: true,
    category: 'Gaming',
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/150?text=Keyboard'
  },
  {
    id: 4,
    name: 'HD Monitor',
    price: 199.99,
    inStock: true,
    category: 'Computers',
    rating: 4.7,
    imageUrl: 'https://via.placeholder.com/150?text=Monitor'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 25.49,
    inStock: false,
    category: 'Accessories',
    rating: 4.1,
    imageUrl: 'https://via.placeholder.com/150?text=USB+Hub'
  },
  {
    id: 6,
    name: 'Laptop Stand',
    price: 35.00,
    inStock: true,
    category: 'Office',
    rating: 4.6,
    imageUrl: 'https://via.placeholder.com/150?text=Stand'
  },
  {
    id: 7,
    name: 'Portable SSD 1TB',
    price: 129.99,
    inStock: true,
    category: 'Storage',
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/150?text=SSD'
  },
  {
    id: 8,
    name: 'Noise Cancelling Headphones',
    price: 249.99,
    inStock: false,
    category: 'Audio',
    rating: 4.3,
    imageUrl: 'https://via.placeholder.com/150?text=Headphones'
  },
  {
    id: 9,
    name: 'Smartwatch',
    price: 199.00,
    inStock: true,
    category: 'Wearables',
    rating: 4.4,
    imageUrl: 'https://via.placeholder.com/150?text=Watch'
  },
  {
    id: 10,
    name: '4K Action Camera',
    price: 149.99,
    inStock: true,
    category: 'Cameras',
    rating: 4.0,
    imageUrl: 'https://via.placeholder.com/150?text=Camera'
  }
];
 
  searchedItem:string=" " 
  getTheInput(item:string){
      this.searchedItem=item;
  }

  @ViewChild('DOB') dateofbirth!:ElementRef;
  @ViewChild('AGE') Age!:ElementRef;
  
 calculate(){
  //  return this.dateofbirth.nativeElement.value
  console.log((new Date(this.dateofbirth.nativeElement.value)).getFullYear()-2025)
  }

}
