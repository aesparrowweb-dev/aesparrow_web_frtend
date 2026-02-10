import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.scss']
})
export class AboutBannerComponent implements OnInit {
  aboutData: any;
  apiBase = environment.apiUrl.replace('/api/', '');

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('banner/test').subscribe((data: any) => {
      const item = Array.isArray(data) ? data[0] : data;

      if (item?.banner_image && item.banner_image.startsWith('/')) {
        item.banner_image = this.apiBase + item.banner_image;
      }

      this.aboutData = item;
    });
  }
}
