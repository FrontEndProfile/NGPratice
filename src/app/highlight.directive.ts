// import { Directive, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor(private el: ElementRef) {
//     this.el.nativeElement.style.backgroundColor = "green";
//     this.el.nativeElement.style.color = "white";
//     this.el.nativeElement.style.padding = "4px 10px";
//    }
// }



import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',);
    }
    @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'teal');
    }
}