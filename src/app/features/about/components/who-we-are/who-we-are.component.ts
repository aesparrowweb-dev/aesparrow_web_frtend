import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon_class: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  whyChooseItems: WhyChooseItem[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWhyChooseItems();
  }

  private fetchWhyChooseItems(): void {
    this.isLoading = true;
    this.error = null;

    this.http.get<WhyChooseItem[]>(`${environment.apiUrl}why-choose/active/`)
      .subscribe({
        next: (data) => {
          this.whyChooseItems = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching Why Choose Us items:', err);
          this.error = 'Failed to load Why Choose Us content. Please try again later.';
          this.isLoading = false;
        }
      });
  }
}
