import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'app-industries-we-serve',
  templateUrl: './industries-we-serve.component.html',
  styleUrls: ['./industries-we-serve.component.scss']
})
export class IndustriesWeServeComponent implements OnInit {
  industries: any[] = [];
  isLoading = true;
  hasError = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    AOS.init();
    this.loadIndustries();
  }

  private loadIndustries(): void {
    this.apiService.getData('industries').subscribe({
      next: (response) => {
        // Handle both paginated and non-paginated responses
        this.industries = Array.isArray(response) ? response : response?.results || [];
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }
}

