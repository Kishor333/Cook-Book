import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  link = 'recipe';
  currentLink(link: string) {
    this.link= link;
    }
}
