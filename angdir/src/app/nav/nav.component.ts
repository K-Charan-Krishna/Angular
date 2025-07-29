import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Products } from '../services/product.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  cartLength:number=0
  inputSearch:string=""
  isSidebarVisible:boolean=true
  currentUrl!:string
  showArrow!:boolean
  isAdminUser!:boolean | undefined

  constructor(private product:Products,
    private activeroute:ActivatedRoute,
    private router:Router,
    private cookies:CookieService) { }

  ngOnInit(): void {
    this.product.sidebar$.subscribe(val=>{
    this.isSidebarVisible=val
    console.log(this.isSidebarVisible,'from nav')
    })
    this.currentUrl=this.router.url;
    this.isSidebarVisible = this.currentUrl.includes('/product') || this.currentUrl.includes('/cart');
    this.showArrow = (this.currentUrl === '/home') ? false : true;
    this.isAdminUser=this.product.isAdmin
  }

  ngDoCheck(){
    this.cartLength=this.product.getCartLength()
  }


  
  @Output() searched: EventEmitter<string>= new EventEmitter <string>();

  theEmit():void{
    this.searched.emit(this.inputSearch)
  }

  showSideBar(){
    this.product.handelSideBar()
    if((this.currentUrl.includes('/product')) || (this.currentUrl.includes('/cart'))){
      this.router.navigate(['/'])
    }
  }
  logout(){
    this.cookies.delete('jwt');
    this.router.navigate(['/login'])
    console.log('removed')
  }
}
