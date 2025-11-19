import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-trusted',
  templateUrl: './trusted.component.html',
  styleUrls: ['./trusted.component.scss']
})
export class TrustedComponent {

  client1Data = [
    {
      img:"assets/images/home/ccl.png"
    },
    {
      img:"assets/images/home/ccl2.png"
    },
    {
      img:"assets/images/home/seequize.png"
    },
  ]

  ngOnInit(){
         AOS.init();
  }
}
