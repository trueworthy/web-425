import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    <h2 class="login">
      Please Log In
    </h2>
  `,
  styles: [
    `
      .login {
        color: black;
        background-color: yellow;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}