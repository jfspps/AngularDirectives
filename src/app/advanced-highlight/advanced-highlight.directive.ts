import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit{

  // one can also set aliases to input properties and then use [appAdvancedHighlight]="'red'" to denote the directive and property at the same time (see https://angular.io/guide/attribute-directives#bind-to-an-input-alias)
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  
  // pass the DOM property and sub-properties (cf. basic-highlight directive's backgroundColor)
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // legacy code may contain RendererV2 instead of Renderer2
  // https://angular.io/api/core/Renderer2
  constructor(private elRef : ElementRef, private renderer: Renderer2) { }

  // this approach does not directly access DOM objects as basic-highlight does and is also considered better practice
  // it works without a browser (basicHighlight would return an error attempting to access the DOM if a browser was used)
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  // the argument mouseenter is an official DOM event
  // https://developer.mozilla.org/en-US/docs/Web/Events
  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
