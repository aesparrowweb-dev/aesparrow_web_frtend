import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  @ViewChild('backgroundVideo') videoElement!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;

    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;

    video.play().catch((error: any) => {
      console.error("Autoplay failed:", error);
      const enablePlayback = () => {
        video.play();
        document.removeEventListener('click', enablePlayback);
      };
      document.addEventListener('click', enablePlayback);
    });

  }


}
