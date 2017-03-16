/* Based on https://www.bennadel.com/blog/3204-solved-css-specificity-and-shadow-dom-overrides-in-angular-2-4-1.htm */

import { Component } from '@angular/core';

/*
 * In this particular exploration, we're going to be overriding the host element's "margin" property. 
 * Notice that margin is defined on both ":host" and on ":host(.mini)". 
 * We're going to be overriding both of those use-cases from our root component. 
 * And, since we're moving our global stylesheet into the shadow DOM of the root component, 
 * the root component is the only other piece of code that we need to look at
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
