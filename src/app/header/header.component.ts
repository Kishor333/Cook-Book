import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() currentRoute = new EventEmitter<string>();

  currentHeader = 'recipe';
  constructor() { }

  ngOnInit(): void {
  }

redirectionTo(link: string) {
  this.currentHeader = link;
 this.currentRoute.emit(link);
}
}
