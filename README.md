# AngularDirectives

Directives add functionality to HTML. Angular comes with built-in directives ngClass, ngStyle, ngIf, ngFor and ngSwitch.

  + `NgClass` sets the CSS class
  + `NgStyle` sets the CSS styling
  + `NgIf`, `NgFor` and `NgSwitch` are structural directives evaluate conditions and execute statements as necessary
 
This project demonstrates the above directives and the implementation of custom directives `basic-highlight` and `advanced-highlight` which change the background colour of a paragraph tag. The `advanced-highlight` directive also shows how to apply listeners and how to bind DOM properties to TypeScript properties (e.g. saving background colour property to a TypeScript string property).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Building directives from the console

The command  `ng g c componentName` was used to generate (g) a new component. Similarly, one can build a new directive using `ng g d directiveName`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
