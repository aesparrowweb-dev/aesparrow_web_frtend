import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-industries-list',
  templateUrl: './industries-list.component.html',
  styleUrls: ['./industries-list.component.scss']
})
export class IndustriesListComponent implements OnInit {

  industries: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    AOS.init({ duration: 1000 });
    this.loadIndustries();
  }

  loadIndustries() {
    this.apiService.getData('industry-page').subscribe(
      (res) => {
        this.industries = res;
      },
      (err) => {
        console.error('Error loading industries:', err);
      }
    );
  }
}
