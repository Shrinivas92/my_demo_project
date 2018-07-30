import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ['Angular', 'JavaScript', 'Typescript'];
  newItem = '';

  push(value) {
    this.items.push(value);
    this.newItem = '';
  }

  pop(i) {
    this.items.splice(i, 1);
  }

}
