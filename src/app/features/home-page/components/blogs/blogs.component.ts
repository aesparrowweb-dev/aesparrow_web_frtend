import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  data:any;

  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit() {
    this.http.get("assets/data/blogsData.json").subscribe((response) => {
      this.data = response;
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
