import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Products} from  '../services/product.service'
import {IDeactivate} from '../services/routeguard.service'
import { Observable, retry } from 'rxjs';

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
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,IDeactivate {

  detailedProduct:Product[]=[]
  productId!:string|null;
  productDetails:Product={
      id: 0,
      title:'',
      price: 0,
      description: '',
      category: '',
      image:'',
      rating: {
        rate: 0,
        count:0,
      }

  }
  
  constructor(private activeRoute:ActivatedRoute,
    private products:Products,
    private route:Router) { }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(params => {
    this.productId = params.get('id');
    console.log(this.productId,'from detailed Product') 
    const numericId = Number(this.productId);
    this.products.fetchProducts().then(() => {
    this.products.product$.subscribe((value)=>{
      this.detailedProduct=value.filter((each)=>each.id===numericId)
      this.productDetails=this.detailedProduct[0]
      console.log(this.detailedProduct)
    })  
   }); 
  // this.products.product$.subscribe((val)=>{
  //   console.log(val)
  // })
 
  })
  } 

  addToCart(){
    const Id = Number(this.productId);
    this.products.addToCart(Id)
  }

  checkquery(){
    this.activeRoute.queryParamMap.subscribe(val=>{
      console.log(val.get('edit'))
    })
  }

  addquerparam(){
    this.route.navigate(['/product',this.productId],{queryParams:{edit:true}})
    console.log('added')
  }

  canExit(){
    const filterlist=this.products.cart.filter(each=>each.id===Number(this.productId))
    if (filterlist.length>=1){
      return true
    }
    else{
      let conformed=confirm('You Forget To Add the Product To Cart!')
      return conformed?true :false
    }
  } 
  
}
