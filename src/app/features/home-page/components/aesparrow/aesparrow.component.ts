import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-aesparrow',
  templateUrl: './aesparrow.component.html',
  styleUrls: ['./aesparrow.component.scss']
})
export class AesparrowComponent {

  services: any[] = [];
  extraServices: any[] = [];

  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    AOS.init();
    this.loadServices();
  }

  loadServices() {
    this.api.getData('aesparrow-services').subscribe((res: any) => {
      this.services = res;
    });
  }

  onClick() {
    this.router.navigate(['service/cybersecurity-consulting-services']);
    window.scrollTo(0, 0);
  }
}
