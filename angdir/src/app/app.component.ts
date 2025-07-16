import { Component ,ElementRef,ViewChild } from '@angular/core';
import {Products} from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[Products]
})
export class AppComponent {
  
  searchedItem:string=" " 
  getTheInput(item:string){
      this.searchedItem=item;
  }
  constructor(private products:Products){}

  @ViewChild('DOB') dateofbirth!:ElementRef;
  @ViewChild('AGE') Age!:ElementRef;
  


  ngOnInit(){
  }
 

 calculate(){
  //  return this.dateofbirth.nativeElement.value
  console.log((new Date(this.dateofbirth.nativeElement.value)).getFullYear()-2025)
  }

}
