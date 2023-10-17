import { Component, OnDestroy, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // @Output() currentRoute = new EventEmitter<string>();

  // openMenu =false;
  currentHeader = 'recipe';
  userExist = false;
  userSub?: Subscription;

  constructor(private dataStore:DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub =  this.authService.user.subscribe(
      responseUser => {
      this.userExist = !!responseUser;
      }
    )
  }

  getRecipe() {
    this.dataStore.fetchData().subscribe();
  }

  saveData() {
    this.dataStore.storeData();
  }

  logOut() {
    this.authService.logOut();
  }

  // toggleMenu():void {
  //   this.openMenu = !this.openMenu;
  // }

  // redirectionTo(link: string) {
  //   this.currentHeader = link;
  // this.currentRoute.emit(link);
  // }
  ngOnDestroy(){
    this.userSub?.unsubscribe();
  }
}
