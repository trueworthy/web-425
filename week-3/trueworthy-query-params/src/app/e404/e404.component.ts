import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h4>Help I'm Lost!</h4>
      </div>
    </div>
  `,
  styles: [`
    .container{
      margin-top: 20px;
    }
    h4 {
      color: red;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}