import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent implements OnInit, OnChanges {
  @Input() mainService: any[] = [];
  @Input() servicesId: any[] = [];

  filteredServices: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.mainService && this.servicesId) {
      this.filteredServices = this.mainService.filter((service: any) =>
        !this.servicesId.includes(service.id)
      );
    }
  }

  onClickServices(serviceId: any) {
    this.router.navigate(['service', serviceId]);
    window.scrollTo(0, 0);
  }
}
