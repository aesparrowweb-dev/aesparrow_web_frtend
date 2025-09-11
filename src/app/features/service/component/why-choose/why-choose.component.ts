import { Component, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss']
})
export class WhyChooseComponent {

  @Input() servicechoose: any;

  ngOnInit(): void {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
  });
}

}
