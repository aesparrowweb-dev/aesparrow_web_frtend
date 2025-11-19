import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-career-banner',
  templateUrl: './career-banner.component.html',
  styleUrls: ['./career-banner.component.scss']
})
export class CareerBannerComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
