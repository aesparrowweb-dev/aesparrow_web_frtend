import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  data: any[] = [];
  defaultImg = "assets/images/user_logo.jpg";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchClientSays();
  }

  fetchClientSays() {
    this.http.get<any[]>(environment.apiUrl + 'client-says/')
      .subscribe(res => {

        this.data = res.map(item => ({
          ...item,
          img: item.img ? item.img : this.defaultImg
        }));

      });
  }

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
