import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // this is a setter of the property 'unless'
  // note the logic is to execute or set something when condition is false, hence if (!condition)
  // the name of the property is the same as the name of the class because internally, Angular recognises * and converts the *appUnless into that given below
  @Input() set appUnless(condition: boolean) {
    if (!condition){
      // build a view inside another
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // first argument represents what is injected and the second states where it is rendered
  // recall that the private arguments are now properties of UnlessDirective
  // templateRef gives the directive access to the template it is declared on
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}

/***
 * Structural directives and *appUnless
 * 
 * Here, the literal [appUnless] refers to both the directive and the directive's property. Using [unless] would refer to the property but Angular would not recognise the directive 'unless', since it is named appUnless.
 * 
 * <ng-template [appUnless]="onlyOdd">
 *  <div>
 *    (some template code)
 *  </div>
 * </ng-template>
 * 
 * Incidentally, one could use this notation instead of *appUnless if desired
 */