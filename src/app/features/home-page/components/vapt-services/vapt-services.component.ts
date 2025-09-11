import { Component } from '@angular/core';
 import {gsap} from 'gsap';
  import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-vapt-services',
  templateUrl: './vapt-services.component.html',
  styleUrls: ['./vapt-services.component.scss']
})
export class VaptServicesComponent {
constructor(){}

    ngOnInit(): void{
      gsap.registerPlugin(ScrollTrigger);

      this.onScroll();

    }
onScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector('.scrollx-inner') as HTMLElement;

  const scrollWidth = scrollContainer.scrollWidth;
  const containerWidth = scrollContainer.parentElement?.clientWidth || 0;

  const scrollAmount = scrollWidth - containerWidth;

  gsap.to(scrollContainer, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollx",
      pin: true,
      scrub: 1,
      start: "top 25%",
      end: () => `+=${scrollAmount}`
    }
  });
}

}
