import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  data:any;

  constructor(private apiService: ApiService, private router: Router) { }



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
