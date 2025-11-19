import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
certifications = [
  {
    title: 'ISO 27001',
    description: 'Information Security Management System'
  }
]
}
