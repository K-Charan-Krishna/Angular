import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './home/home.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], searchedItem:string) {
    console.log(value,searchedItem,'from pipe line')
    if (searchedItem===''){
      return value
    }
    else{
        return value.filter((each)=>each.title.toLowerCase().includes(searchedItem))
    }
   
  }

}
