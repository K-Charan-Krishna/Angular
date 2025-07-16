import {Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'persentage'
})
export class Discountpipe implements PipeTransform{
    transform(value: any) {
        return (value*100)%30
    }
}