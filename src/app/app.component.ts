import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook-book';

  currentDate = new Date();
  currentDayword = this.currentDate.getDay();
  currentTime = this.currentDate.getTime();

  currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.currentDate);
  currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(this.currentDate);
}
