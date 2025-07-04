import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() input:string="Life Cycle"
  constructor() {
    console.log(` from Demo constructor  ${this.input}`)
  }
  
  ngOnChanges(change:SimpleChange){
    console.log(' onchange ',change)
  }

  ngOnInit(): void {
    console.log('from Demo OnInIt')
    console.log(this.input)
  }

  ngDoCheck(){
    console.log('from ngDoCheck')
  }

  ngAfterContentInit(){
    console.log('from ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('from ngAfterContentCheck')
  }

  ngAfterViewInit(){
    console.log(' from ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log(' from ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log(' ngOnDestroy ')
  }


}
