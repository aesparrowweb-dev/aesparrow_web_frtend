import { Component, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-service-desc',
  templateUrl: './service-desc.component.html',
  styleUrls: ['./service-desc.component.scss']
})
export class ServiceDescComponent {
  @Input() serviceDesc: any;

  ngOnInit(): void {
    AOS.init({
      duration: 1000, 
    });
  }


}
