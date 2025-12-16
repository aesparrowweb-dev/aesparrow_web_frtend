import { Component, OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ApiService } from 'src/app/services/api.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-vapt-services',
  templateUrl: './vapt-services.component.html',
  styleUrls: ['./vapt-services.component.scss']
})
export class VaptServicesComponent implements OnInit {
  
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
   
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
    ]
  };

  services: any[] = [];
  isLoading = false;
  private readonly apiRoot = environment.apiUrl.replace(/\/?api\/?$/, '/');

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.isLoading = true;
    this.apiService.getData('vapt-services').subscribe({
      next: (res) => {
        this.services = Array.isArray(res)
          ? res.filter((service) => service.is_active !== false)
          : [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load VAPT services', err);
        this.isLoading = false;
      }
    });
  }

  getBackgroundImage(service: any): string {
    if (service?.image) {
      const path = service.image.startsWith('http')
        ? service.image
        : `${this.apiRoot}${service.image.replace(/^\//, '')}`;
      return `url(${path})`;
    }
    return 'url(assets/images/main-services/vapt.jpg)';
  }

  // Method to scroll to specific slide
  goToSlide(slideIndex: number) {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickGoTo(slideIndex);
    }
  }

  // Method to scroll to next slide
  nextSlide() {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickNext();
    }
  }

  // Method to scroll to previous slide
  previousSlide() {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickPrev();
    }
  }
}
