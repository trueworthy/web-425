/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   20 July 2019
; Description: Exercise 2.3 - Two-Way Binding
;=============================================  
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br /><br/><br />
  <div class="container-fluid two-way-form">
  <h2 class="text-center">Two-Way Binding</h2><br />
<div class="styleForm form-group">
<input class="form-control" type="text"
placeholder="Enter your name..."
[(ngModel)]="name">
<button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
</div>
<div class="styleForm form-group">
<p class="alert-success"> Welcome to a two-way binding example, {{name}}!</p>
<div>
</div>
  `,
  styles: [`
  .styleForm {
    width:50%;
    margin:auto;
  }
  .alert-success {
    background-color:light blue;
    padding:10px;
    color:black;
  }
  `

  ]
})
export class AppComponent {
  name: string;
}