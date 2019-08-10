
import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Trueworthy login';

  username: string
  password: string

  onClear() {
    this.username = ''
    this.password = ''
  }

  onSubmit() {
    alert('Username: ' + this.username + '\nPassword: ' + this.password)
  }
}