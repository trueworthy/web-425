/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   04 August 2019
; Description: Assignment 4.4
;=============================================
*/

import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <h2>Yummy Fruit</h2>
      <br>
      <br>
      <table class="table table-striped table-info">
        <thead class="tbl-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (per/lb)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let fruit of fruitArray | async">
            <td>{{fruit.id}}</td>
            <td>{{fruit.name}}</td>
            <td>{{fruit.pricePerPound}}</td>
            <td>{{fruit.quantity}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'trueworthy-async-pipe';
  fruitArray: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.fruitArray = this.fruitService.getFruit();
  }
}