import { Component, Input } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children-services',
  templateUrl: './children-services.component.html',
  styleUrls: ['./children-services.component.scss']
})
export class ChildrenServicesComponent {

  @Input() childrenService: any;
  @Input() servicesId: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }

  onClickServices(subId: any) {
    this.router.navigate(['./service', this.servicesId, subId]);
    window.scrollTo(0, 0);
  }

}
