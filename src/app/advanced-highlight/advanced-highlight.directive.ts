import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit{
  
  // pass the DOM property and sub-properties (cf. basic-highlight directive's backgroundColor)
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // legacy code may contain RendererV2 instead of Renderer2
  // https://angular.io/api/core/Renderer2
  constructor(private elRef : ElementRef, private renderer: Renderer2) { }

  // this approach does not directly access DOM objects as basic-highlight does and is also considered better practice
  // it works without a browser (basicHighlight would return an error attempting to access the DOM if a browser was used)
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // the argument mouseenter is an official DOM event
  // https://developer.mozilla.org/en-US/docs/Web/Events
  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
