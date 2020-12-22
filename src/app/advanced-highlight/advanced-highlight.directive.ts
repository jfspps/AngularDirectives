import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit{

  // legacy code may contain RendererV2 instead of Renderer2
  // https://angular.io/api/core/Renderer2
  constructor(private elRef : ElementRef, private renderer: Renderer2) { }

  // this approach does not directly access DOM objects as basic-highlight does and is also considered better practice
  // it works without a browser (basicHighlight would return an error attempting to access the DOM if a browser was used)
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
