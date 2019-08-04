/*
; ============================================
; Title:  fruit.service.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   04 August 2019
; Description: Assignment 4.4
;=============================================
*/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fruit } from './fruit';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruitArray: Fruit[] = [
    { id: 11, name: "Dragon Fruit", pricePerPound: "3.99", quantity: 5 },
    { id: 44, name: "Orange", pricePerPound: "1.50", quantity: 12 },
    { id: 22, name: "Banana", pricePerPound: ".99", quantity: 50 },
    { id: 33, name: "Pear", pricePerPound: "1.99", quantity: 25 },
    { id: 55, name: "Mango", pricePerPound: "2.50", quantity: 22 },
  ]

  constructor() { }

  getFruit(): Observable<Fruit[]> {
    return of(this.fruitArray);
  }
}