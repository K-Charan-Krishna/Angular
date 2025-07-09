import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(private element:ElementRef,private render:Renderer2) {

   }
  
   @HostListener('mouseenter') onhover(){
      this.render.setStyle(this.element.nativeElement,'margin','5px 10px')
      this.render.setStyle(this.element.nativeElement,'padding','30px 30px')
      this.render.setStyle(this.element.nativeElement,'transition','0.5s')
   }

   @HostListener('mouseleave') onhoverout(){
      this.render.removeStyle(this.element.nativeElement,'margin')
      this.render.setStyle(this.element.nativeElement,'padding','1rem')
      this.render.setStyle(this.element.nativeElement,'transition','0.5s')
   }

}
