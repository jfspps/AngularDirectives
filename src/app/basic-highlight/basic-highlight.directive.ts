import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // brackets signifies that the declaration of appBasicHighlight is recognised as an attribute not an element (see HTML template)
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // inject some dependencies
    constructor(private elementRef : ElementRef) {
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}