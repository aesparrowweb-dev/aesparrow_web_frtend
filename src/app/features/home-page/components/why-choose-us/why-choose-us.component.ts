import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  ngOnInit(){
         AOS.init();
  }
}
