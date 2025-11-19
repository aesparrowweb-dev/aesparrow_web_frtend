import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-blog-banner',
  templateUrl: './blog-banner.component.html',
  styleUrls: ['./blog-banner.component.scss']
})
export class BlogBannerComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
