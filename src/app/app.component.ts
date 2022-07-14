import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-angular';

  counter = 0;

  get disabled() {
    return this.counter <= 0;
  }

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  clear() {
    this.counter = 0;
  }
}
