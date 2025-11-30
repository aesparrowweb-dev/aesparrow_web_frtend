import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.scss']
})
export class ContactBannerComponent implements OnInit {
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

    // Fetch contact banner data
    this.apiService.getData('banner/contact').subscribe({
      next: (response) => {
        this.bannerData = response;

        // ✅ Use correct key from backend (e.g., banner_image)
        let imgPath = response.banner_image || '';

        // ✅ Fix relative URLs like /media/...
        if (imgPath && !imgPath.startsWith('http')) {
          imgPath = `${environment.apiUrl.replace('/api/', '')}${imgPath}`;
        }

        console.log('Contact banner image:', imgPath);

        // ✅ Sanitize for safe DOM binding
        this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${imgPath})`);
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error = 'Failed to load contact banner.';
        this.loading = false;
      }
    });
  }
}
