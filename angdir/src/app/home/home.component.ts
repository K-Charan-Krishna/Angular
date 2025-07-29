import { Component, Injectable, OnInit } from '@angular/core';
import {Products} from '../services/product.service'
import { CookieService } from 'ngx-cookie-service';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:Product[]=[]
  searchedItem:string=''
  sidebar:boolean=false
  spinner:boolean=true
  constructor(private products:Products , private cookie: CookieService, private router:Router) { }


  ngOnInit(): void {
  
  // const jwt=this.cookie.get('jwt')
  // console.log(jwt==='','checking undefind')
  // if (jwt===''){
  //    this.router.navigate(['/login'])
  // }
  // this.products.fetchProducts().then(() => {
  //   this.products.sidebar$.subscribe((value)=>{
  //     this.sidebar=value
  //   })
  //   this.products.spinner$.subscribe((val)=>{
  //     this.spinner=val
  //   })
  //   this.products.product$.subscribe((value)=>{
  //     this.product=value;
  //   }) 
  // }); 
  console.log('from home Route')
  }
  ngDoCheck():void{
    console.log(this.sidebar,'from home')
  }
   
  // getTheInput(item:string){
  //    this.searchedItem=item
  // }
}


