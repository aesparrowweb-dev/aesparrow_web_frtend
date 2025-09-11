import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponsiveService } from 'src/app/services/responsive.service';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-responsive-header',
  templateUrl: './responsive-header.component.html',
  styleUrls: ['./responsive-header.component.scss'],
  animations: [
    trigger('staggerChildren', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-10px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ResponsiveHeaderComponent implements OnInit {
  isAboutUsOpen = false;
  isServicesOpen = false;
  openSubServiceId: number | null = null;
  mainServiceId: number | null = null;
  serviceData: any[] = [];

  constructor(
    public sidenavService: ResponsiveService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadAllService();
  }

  toggleServicesDropdown(): void {
    this.isServicesOpen = !this.isServicesOpen;
    this.openSubServiceId = null;
  }


  toggleSubService(serviceId: number): void {
    this.openSubServiceId = this.openSubServiceId === serviceId ? null : serviceId;
  }

  onClickService(serviceId: number): void {
    this.mainServiceId = serviceId;
    this.router.navigate(['service', serviceId]);
    window.scrollTo(0, 0);
    this.sidenavService.closeResponsive();
  }

  onClickSubService(subServiceId: number): void {
    if (this.mainServiceId !== null) {
      this.router.navigate(['service', this.mainServiceId, subServiceId]);
      window.scrollTo(0, 0);
       this.sidenavService.closeResponsive();
    }
  }

  loadAllService(): void {
    this.http.get<any[]>('assets/data/serviceData.json').subscribe({
      next: (response) => {
        this.serviceData = response;
      },
      error: (err) => {
        console.error('Failed to load service data:', err);
      }
    });
  }
}
