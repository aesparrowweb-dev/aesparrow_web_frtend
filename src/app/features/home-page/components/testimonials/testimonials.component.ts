import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;


  data = [
    {
      // name:"Nitin",
      title: "AESPARROW helped us uncover critical vulnerabilities we didn't even know existed.",
      position: "CTO, Fintech Startup (Bangalore)",
      description: "Their team conducted a thorough VAPT across our infrastructure and web applications. The level of detail, professionalism, and clarity in their reporting truly stood out.",
      img: "assets/images/user_logo.jpg"
    },
    {
      title: "Our ISO 27001 certification journey was smooth thanks to AESPARROW.",
      // name:"Sachin Negi",
      position: "Head of IT Compliance, Healthcare SaaS Provider",
      description: "They guided us through every step, from gap analysis to documentation and audit readiness. Their compliance team is top-notch.",
      img: "assets/images/user_logo.jpg"
    },
    {
      title: "What impressed us most was their proactive approach and deep technical knowledge.",
      // name:"Suman Kushwaha",
      position: "CISO, E-commerce Platform",
      description: "AESPARROW didn’t just find vulnerabilities — they explained the business impact and helped us prioritize remediation. True partners in our security strategy.",
      img: "assets/images/user_logo.jpg"
    },
    {
      title: "The red team assessment from AESPARROW exposed our blind spots — and made us stronger.",
      // name:"Nitin",
      position: "Security Manager, Manufacturing Company",
      description: "They simulated real-world threats across physical, digital, and social layers. The engagement was eye-opening and highly valuable.",
      img: "assets/images/user_logo.jpg"
    },
    {
      title: "Reliable, responsive, and always ahead of the curve.",
      // name:"Nitin",
      position: "VP of Engineering, SaaS Startup",
      description: "We rely on AESPARROW for continuous compliance audits and cloud security assessments. Their agility and deep domain knowledge are unmatched.",
      img: "assets/images/user_logo.jpg"
    },

  ]

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
