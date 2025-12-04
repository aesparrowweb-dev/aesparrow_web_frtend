import { Component, ViewChild, OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  testimonialData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials() {
    this.apiService.getData('testimonials').subscribe(
      (res) => {
        this.testimonialData = res;
        this.slideconfig = this.getSlideConfig();

        // important: wait for DOM update then reinit slick
        setTimeout(() => {
          if (this.slickModal) {
            this.slickModal.initSlick();
          }
        }, 100);
      },
      (err) => {
        console.error('Error fetching testimonials:', err);
      }
    );
  }

  slideconfig = this.getSlideConfig();

  private getSlideConfig() {
    const singleTestimonial = this.testimonialData.length <= 1;

    return {
      slidesToShow: singleTestimonial ? 1 : 3,
      slidesToScroll: 1,
      infinite: !singleTestimonial,
      arrows: false,
      dots: !singleTestimonial,
      centerMode: true,
      centerPadding: singleTestimonial ? '0px' : '10px',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 991,
          settings: { slidesToShow: 2, centerMode: false }
        }
      ]
    };
  }

  goToPrevSlide() {
    if (this.slickModal) this.slickModal.slickPrev();
  }

  goToNextSlide() {
    if (this.slickModal) this.slickModal.slickNext();
  }
}
