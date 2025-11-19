import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  blogs = [
    {
      img: "assets/images/teams/p2.jpg",
      heading: "Vimla Devi – Founder & Chief Executive Officer (CEO)",
      subheading: "Mrs. Vimla Devi is the Founder and Chief Executive Officer of AESPARROW CONSULTING. She is responsible for steering the company’s strategic vision, driving sustainable growth, and managing overall business operations. With a strong commitment to excellence, she ensures the smooth execution of all organizational initiatives, fosters innovation, and cultivates a performance-driven culture. Her leadership plays a pivotal role in positioning AESPARROW CONSULTING as a trusted name in the industry and delivering long-term value to clients and stakeholders."
    },
    {
      img: "assets/images/teams/p3.jpg",
      heading: "Suman Kushwaha – Director – Cyber Security, Audits, and VAPT Services",
      subheading: "Mrs. Suman Kushwaha serves as the Director of Cyber Security Services, Audits, and Vulnerability Assessment & Penetration Testing (VAPT) at AESPARROW CONSULTING. She is responsible for managing the end-to-end execution of security audits and VAPT engagements to ensure they are conducted efficiently, thoroughly, and in compliance with industry standards. Under his leadership, the firm delivers comprehensive cybersecurity solutions, helping clients identify vulnerabilities, strengthen their security posture, and maintain regulatory compliance. His hands-on oversight guarantees that all client projects are executed with precision and professionalism."
    },
    // {
    //   img: "assets/images/about/a3.jpg",
    //   heading: "[Name] – Head of GRC Services",
    //   subheading: "With years of experience in risk management and regulatory consulting, [Name] leads our GRC division, helping clients implement and maintain robust compliance frameworks."
    // },
    {
      img: "assets/images/teams/p1.jpg",
      heading: "Sachin Negi - Director – Cloud Services and Web Development",
      subheading: "Mr. Sachin Negi is the Director of Cloud Services and Web Development at AESPARROW CONSULTING. He leads the development and implementation of scalable cloud infrastructure solutions and oversees all web development initiatives. His focus is on delivering secure, high-performance applications tailored to client needs. Mr. Negi ensures that all services provided run seamlessly and that every web solution developed by the company meets the highest standards of functionality, design, and reliability. His leadership ensures optimal results and client satisfaction across all technology projects."
    }
    // {
    //   img: "assets/images/about/a5.avif",
    //   heading: "[Name] – Lead Penetration Tester",
    //   subheading: "[Name] performs advanced manual and automated testing to identify and address security weaknesses across networks, applications, and cloud infrastructure."
    // }
  ]

  ngOnInit(){
    AOS.init({ duration: 800, once: true });
  }

  slideconfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }



  goToPrevSlide() {
    if (this.slickModal) {
      this.slickModal.slickPrev();
    }
  }

  goToNextSlide() {
    if (this.slickModal) {
      this.slickModal.slickNext();
    }
  }
}
