import { Component, Input, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss']
})
export class OtherServicesComponent {
  filteredServices: any[] = [];
  @Input() subMainServiceData: any[] = [];
  @Input() mainId: any;
  @Input() subId:any;
  carouselReady = false;


  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };


  ngOnInit(){
    console.log(this.subMainServiceData)
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.subMainServiceData && this.subId) {
      this.filteredServices = this.subMainServiceData.filter((service: any) => service.id !== this.subId);
      this.carouselReady = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.carouselReady = true;
      }, 0);
    }
  }

  onClickButton(subId: any) {
    this.router.navigate(['./service', this.mainId, subId]);
    window.scrollTo(0, 0);
  }


}
