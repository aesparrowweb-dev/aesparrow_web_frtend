import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  cards: HomeServiceCard[] = [];
  isLoading = false;
  errorMessage: string | null = null;

   apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  private fetchServices(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<HomeServiceCard[]>(`${environment.apiUrl}home-services/`).subscribe({
      next: (data) => {
        this.cards = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load home services', error);
        this.errorMessage = 'Unable to load services at the moment. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}

interface HomeServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;                 // ✅ MATCH Django
  glitch_image?: string | null;  // ✅ MATCH Django
}