import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { environment } from '../../../../../environments/environments';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  data:any;

  constructor(private apiService: ApiService, private router: Router) { }

  environment = environment;

  ngOnInit() {
    this.apiService.getData('blogs').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('Error fetching blogs for home page:', err);
      }
    });
  }

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    auto: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  getImageUrl(path: string) {
  if (!path) return '';

  // Already absolute (https://...)
  if (path.startsWith('http')) {
    return path;
  }

  // Django media path
  if (path.startsWith('/media')) {
    return 'http://127.0.0.1:8000' + path;
  }

  // Angular assets
  return path;
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


  OnClickReadMore(id:any){
    this.router.navigate(['./blogs', id]);
    window.scrollTo(0,0)
  }
}
