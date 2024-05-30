import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective {

  constructor(private element: ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.borderColor('blue')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.borderColor(null)
  }

  borderColor(color:string | null){
    return this.renderer.setStyle(this.element.nativeElement,'border',color?`4px solid ${color}`:null);
  }
}
