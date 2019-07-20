/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   20 July 2019
; Description: Exercise 2.2 - One-Way Binding
;=============================================  
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'app';

  // class property
  name: string = "Lea Trueworthy"; /* replace this with your own name */

  // change name function
  changeName() {
    this.name = "Richard Krasso";
  }
}