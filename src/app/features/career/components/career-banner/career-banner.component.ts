import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career-banner',
  templateUrl: './career-banner.component.html',
  styleUrls: ['./career-banner.component.scss']
})
export class CareerBannerComponent implements OnInit {
  currentRoute: string = '';
  bannerData: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        this.loadBannerData();
      });

    // Load once on first load
    this.currentRoute = this.router.url;
    this.loadBannerData();
  }

loadBannerData() {
  let bannerKey = '';

  if (this.currentRoute === '/career') bannerKey = 'career';
  else if (this.currentRoute === '/career/job-list') bannerKey = 'career-job-list';
  else if (this.currentRoute === '/career/career-form') bannerKey = 'career-form';
  else return;

  this.apiService.getData(`banner/${bannerKey}`).subscribe({
    next: (res) => {
      // Prefix backend URL to banner image
      const baseUrl = this.apiService['baseUrl'].replace('/api/', ''); // e.g. http://127.0.0.1:8000
      res.banner_image = res.banner_image
        ? `${baseUrl}${res.banner_image}`
        : null;
      res.mobile_banner_image = res.mobile_banner_image
        ? `${baseUrl}${res.mobile_banner_image}`
        : null;

      this.bannerData = res;
      this.updateMetaTags(res);
    },
    error: (err) => console.error('Error loading banner:', err)
  });
}

  updateMetaTags(banner: any) {
    if (banner?.meta_title) this.titleService.setTitle(banner.meta_title);
    if (banner?.meta_description) {
      this.meta.updateTag({ name: 'description', content: banner.meta_description });
    }
    if (banner?.meta_keywords) {
      this.meta.updateTag({ name: 'keywords', content: banner.meta_keywords });
    }
  }
}
