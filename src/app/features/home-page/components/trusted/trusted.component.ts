import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-trusted',
  templateUrl: './trusted.component.html',
  styleUrls: ['./trusted.component.scss']
})
export class TrustedComponent implements OnInit {
  logos: TrustedCompanyLogo[] = [];
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init();
    this.fetchTrustedCompanies();
  }

  private fetchTrustedCompanies(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<TrustedCompanyLogo[]>(`${environment.apiUrl}trusted-companies/`).subscribe({
      next: (data) => {
        this.logos = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load trusted company logos', error);
        this.errorMessage = 'Unable to load trusted partners right now.';
        this.isLoading = false;
      }
    });
  }
}

interface TrustedCompanyLogo {
  id: number;
  name: string;
  logo: string;
  website_url?: string | null;
}
