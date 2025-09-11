import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isSideNavOpen = new BehaviorSubject<Boolean>(false);

  constructor() { }

  openSideNav(){
    this.isSideNavOpen.next(true);
  }

  closeSideNav(){
    this.isSideNavOpen.next(false);
  }
}
