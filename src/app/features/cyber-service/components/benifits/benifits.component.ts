import { Component, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-benifits',
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.scss']
})
export class BenifitsComponent {

  @Input() subBenifits: any;

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
