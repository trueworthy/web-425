import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product-detail',
  template: `
  <h2 class="product" style="height: 100%; background-color:purple">Product Detail Component<br><br>
  <input placeholder="Enter your name" type="text" [formControl]="name"><br></h2>
  `,
  styles: [`
    .product { backgorund-color: purple;}
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}