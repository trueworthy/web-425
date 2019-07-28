import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>User Detail for User:<i> {{ userId }}</i></h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px; 
    }
    h2 {
      color: black;
    }
    i {
      color: purple;
    }
  `]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}