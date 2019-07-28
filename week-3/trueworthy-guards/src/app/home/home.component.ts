import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h2 class="home">Home Component</h2>
  `,
  styles: [`
    .home { background-color: red; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}