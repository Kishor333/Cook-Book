import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() currentRoute = new EventEmitter<string>();

  // openMenu =false;
  currentHeader = 'recipe';
  constructor() { }

  ngOnInit(): void {
  }

  // toggleMenu():void {
  //   this.openMenu = !this.openMenu;
  // }

  // redirectionTo(link: string) {
  //   this.currentHeader = link;
  // this.currentRoute.emit(link);
  // }
}
