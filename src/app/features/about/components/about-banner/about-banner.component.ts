// src/app/about-banner/about-banner.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.scss']
})
export class AboutBannerComponent implements OnInit {
  aboutData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('banner/test').subscribe((data: any) => {
      this.aboutData = Array.isArray(data) ? data[0] : data;
    });
  }
}
