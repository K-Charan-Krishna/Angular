import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";


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

@Injectable()
export class Products {

  products: Product[] = [];
  category!: string ;
  pricesort!:string;
  isAdmin!:boolean | undefined;
  // url: string = 'https://fakestoreapi.com/products/';
  cart: Product[] = [];
  
  constructor(private http:HttpClient){}

  option: { method: string } = {
    method: 'GET'
  };

  private sidebarSubject = new BehaviorSubject<boolean>(false);
  sidebar$ = this.sidebarSubject.asObservable();
  sidebar: boolean = true;

  private spinnerSubject=new BehaviorSubject<boolean>(false)
  spinner$=this.spinnerSubject.asObservable()


  private productSubject= new BehaviorSubject<Product[]>([])
  product$=this.productSubject.asObservable()

  
  doIsAdmin(val:boolean | undefined){
    this.isAdmin=val
      console.log('is Admin',this.isAdmin)
  }

  getCategory(category: string): void {
    this.category = category;
    // this.urlsetting();
    this.fetchProducts()
    console.log(category, 'from services');
  }

  getPriceSort(sort:string):void{
      this.pricesort=sort
      console.log(sort,'from services')
      this.fetchProducts()
   }


  // urlsetting(): void {
  //   if (this.category === '') {
  //     this.url = 'http://localhost:3000/allproducts';
  //   } else {
  //     this.url = ;
  //   }
  // }




  async fetchProducts(): Promise<void> {
    try {
      this.spinnerSubject.next(true)
      let url: string = `http://localhost:3000/allproducts?category=${this.category}&sort=${this.pricesort}`;
      // let  url: string = 'https://fakestoreapi.com/products/';
      this.http.get<{products:any[]}>(url).subscribe(val=>{
          console.log(val)
          this.productSubject.next(val.products)
          this.spinnerSubject.next(false)
          // console.log(this.productSubject.getValue().slice(0, 3));
      })
      // const response = await fetch(url, this.option);
      // const data = await response.json();
      // this.productSubject.next(data)
      // this.spinnerSubject.next(false)
      // console.log(data,'from product service')

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }




  addToCart(id: number): void {
    this.cart = [...this.cart, ...this.productSubject.getValue().filter(p => p.id === id)];
    console.log('add to Cart')
  }

  getCartLength(): number {
    return this.cart.length;
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  
  handelSideBar(): void {
    const current = this.sidebarSubject.value;
    this.sidebarSubject.next(!current);
    console.log(!current, 'from services');
  }

 
}









//     products = [
//   {
//     id: 1,
//     name: 'Wireless Mouse',
//     price: 29.99,
//     inStock: true,
//     category: 'Electronics',
//     rating: 4.5,
//     imageUrl: 'https://via.placeholder.com/150?text=Mouse'
//   },
//   {
//     id: 2,
//     name: 'Bluetooth Speaker',
//     price: 59.99,
//     inStock: false,
//     category: 'Audio',
//     rating: 4.2,
//     imageUrl: 'https://via.placeholder.com/150?text=Speaker'
//   },
//   {
//     id: 3,
//     name: 'Gaming Keyboard',
//     price: 89.99,
//     inStock: true,
//     category: 'Gaming',
//     rating: 4.8,
//     imageUrl: 'https://via.placeholder.com/150?text=Keyboard'
//   },
//   {
//     id: 4,
//     name: 'HD Monitor',
//     price: 199.99,
//     inStock: true,
//     category: 'Computers',
//     rating: 4.7,
//     imageUrl: 'https://via.placeholder.com/150?text=Monitor'
//   },
//   {
//     id: 5,
//     name: 'USB-C Hub',
//     price: 25.49,
//     inStock: false,
//     category: 'Accessories',
//     rating: 4.1,
//     imageUrl: 'https://via.placeholder.com/150?text=USB+Hub'
//   },
//   {
//     id: 6,
//     name: 'Laptop Stand',
//     price: 35.00,
//     inStock: true,
//     category: 'Office',
//     rating: 4.6,
//     imageUrl: 'https://via.placeholder.com/150?text=Stand'
//   },
//   {
//     id: 7,
//     name: 'Portable SSD 1TB',
//     price: 129.99,
//     inStock: true,
//     category: 'Storage',
//     rating: 4.9,
//     imageUrl: 'https://via.placeholder.com/150?text=SSD'
//   },
//   {
//     id: 8,
//     name: 'Noise Cancelling Headphones',
//     price: 249.99,
//     inStock: false,
//     category: 'Audio',
//     rating: 4.3,
//     imageUrl: 'https://via.placeholder.com/150?text=Headphones'
//   },
//   {
//     id: 9,
//     name: 'Smartwatch',
//     price: 199.00,
//     inStock: true,
//     category: 'Wearables',
//     rating: 4.4,
//     imageUrl: 'https://via.placeholder.com/150?text=Watch'
//   },
//   {
//     id: 10,
//     name: '4K Action Camera',
//     price: 149.99,
//     inStock: true,
//     category: 'Cameras',
//     rating: 4.0,
//     imageUrl: 'https://via.placeholder.com/150?text=Camera'
//   }
// ];