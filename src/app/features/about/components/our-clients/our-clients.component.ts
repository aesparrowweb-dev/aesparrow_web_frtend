import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';



@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  testimonialData = [
    {
      quote: "AESPARROW’s expertise in cybersecurity transformed our risk management strategy. They identified and helped us fix critical vulnerabilities before they could be exploited.",
      name: "Julius Dias",
      designation: "CTO",
      company: "Squizify Pty Ltd",
      img: "assets/images/about/user.png"
    },
    {
      quote: "We’ve relied on AESPARROW for all our compliance needs, and their attention to detail and proactive approach are unmatched.",
      name: "Client Name",
      designation: "Compliance Officer",
      company: "Company Name",
      img: "assets/images/about/user.png"
    },
    {
      quote: "Their red team simulation revealed gaps we didn’t know existed. AESPARROW doesn’t just test — they teach and strengthen.",
      name: "CISO",
      designation: "CISO",
      company: "E-commerce Company",
      img: "assets/images/about/user.png"
    },
    {
      quote: "From audit readiness to hands-on training, AESPARROW has become a trusted extension of our security team.",
      name: "VP",
      designation: "VP, IT Operations",
      company: "SaaS Firm",
      img: "assets/images/about/user.png"
    }
  ];


  slideconfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false
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
