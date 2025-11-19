import { Component, HostListener } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aesparrow';
  isShowScrollButton = false;
  topPosToStartShowing = 100;


  constructor(private loaderService: LoaderService, private router: Router, public responsiveService: ResponsiveService,) { }


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShowScrollButton = scrollPosition >= this.topPosToStartShowing;
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    let loaderStartTime: number;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        loaderStartTime = Date.now();
        this.loaderService.show();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const elapsed = Date.now() - loaderStartTime;
        const minTime = 2000;

        const delay = Math.max(minTime - elapsed, 0);
        setTimeout(() => {
          this.loaderService.hide();
        }, delay);
      }
    });
  }
}
