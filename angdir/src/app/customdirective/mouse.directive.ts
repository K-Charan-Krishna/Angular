import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(private element:ElementRef,private render:Renderer2) { }
  
   @Input() bordercolor:string=""
   
   @HostBinding('style.backgroundColor') bgcolor:string=''
   @HostBinding('style.border') border:string=''
   
   OnInit(){
    this.border=this.bordercolor
   }
  

  @HostListener('mouseenter') onmouse(){
    this.render.setStyle(this.element.nativeElement,'margin','5px 10px')
    this.render.setStyle(this.element.nativeElement,'padding','30px 30px')
    this.render.setStyle(this.element.nativeElement,'transition','0.5s')
    this.bgcolor='Green'
    this.border=`5px solid ${this.bordercolor}` 
  }

  @HostListener('mouseleave') onmouseremove(){
    this.render.setStyle(this.element.nativeElement,'margin','12px')
    this.render.setStyle(this.element.nativeElement,'padding','16px')
    this.render.setStyle(this.element.nativeElement,'transition','0.5s')
    this.bgcolor=""
    this.border=""
  }

 

}
