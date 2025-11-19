import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-industries-we-serve',
  templateUrl: './industries-we-serve.component.html',
  styleUrls: ['./industries-we-serve.component.scss']
})
export class IndustriesWeServeComponent {


  industries = [
    {
      title: 'Banking & Finance',
      description: 'Securing digital transactions and financial systems',
      image: 'assets/images/about/banking.png'
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      description: 'Protecting patient data and HIPAA compliance',
      image: 'assets/images/about/healthcare.png'
    },
    {
      title: 'eCommerce & Retail',
      description: 'Defending online platforms, payment gateways, and customer data',
      image: 'assets/images/about/ecommerce.png'
    },
    {
      title: 'Government & Public Sector',
      description: 'Safeguarding national infrastructure and data assets',
      image: 'assets/images/about/goverment.jpg'
    },
    {
      title: 'Technology & SaaS',
      description: 'Fortifying cloud systems and API integrations',
      image: 'assets/images/about/saas.png'
    },
    {
      title: 'Education & eLearning',
      description: 'Securing digital learning platforms and student data',
      image: 'assets/images/about/education.png'
    }
  ];

   ngOnInit() {
     AOS.init();
   }
}

