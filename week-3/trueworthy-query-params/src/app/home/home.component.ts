import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h1>You are currently on the Home Page!</h1>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h1 {
      color: blue;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}