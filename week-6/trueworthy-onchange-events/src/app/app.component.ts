import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trueworthy-onchange-events';

  myGreeting = 'hello';
  myUser: { name: string } = { name: 'John' }
}
