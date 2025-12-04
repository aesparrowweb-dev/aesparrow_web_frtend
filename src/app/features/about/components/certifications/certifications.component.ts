import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    AOS.init();
    this.getCertifications();
  }

  getCertifications() {
    this.apiService.getData('certifications').subscribe(
      (res) => {
        this.certifications = res;
      },
      (err) => {
        console.error("Failed to load certifications", err);
      }
    );
  }
}
