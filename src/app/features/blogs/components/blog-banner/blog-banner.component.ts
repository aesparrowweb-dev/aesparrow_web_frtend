import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-blog-banner',
  templateUrl: './blog-banner.component.html',
  styleUrls: ['./blog-banner.component.scss']
})
export class BlogBannerComponent implements OnInit {
  bannerData: any = null;
  loading: boolean = false;
  error: string = '';
  backgroundImage: SafeStyle | null = null;

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadBannerData();
  }

  loadBannerData(): void {
    this.loading = true;
    this.error = '';

    this.apiService.getData('banner/blogs').subscribe({
      next: (response) => {
        this.bannerData = response;

        // ✅ Get banner image from API
        let imgPath = response.banner_image || '';

        // ✅ Fix relative URLs (like /media/...)
        if (imgPath && !imgPath.startsWith('http')) {
          imgPath = `${environment.apiUrl.replace('/api/', '')}${imgPath}`;
        }

        console.log('Final image path:', imgPath);

        // ✅ Bypass Angular security and bind safely
        this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${imgPath})`);

        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error = 'Failed to load banner data.';
        this.loading = false;
      }
    });
  }
}
