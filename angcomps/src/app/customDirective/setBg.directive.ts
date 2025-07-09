import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[setBg]'
})
export class SetBg {

    constructor(ele:ElementRef){
       ele.nativeElement.style.backgroundColor = 'green';

    }

}