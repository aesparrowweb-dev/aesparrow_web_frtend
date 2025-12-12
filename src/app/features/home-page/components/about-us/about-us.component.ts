import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  showHeading = false;

  aboutData: any = {
    heading: "",
    description: [],
    image: ""
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showHeading = true;
    }, 10);

    AOS.init();
    this.loadAboutData();
  }

  loadAboutData() {
    this.apiService.getData('about-section').subscribe(
      (res) => {
        if (Array.isArray(res) && res.length > 0) {
          this.aboutData = res[0];
          setTimeout(() => AOS.refresh(), 0);
        }
      },
      (err) => {
        console.error("Failed to load About Section:", err);
      }
    );
  }
}
