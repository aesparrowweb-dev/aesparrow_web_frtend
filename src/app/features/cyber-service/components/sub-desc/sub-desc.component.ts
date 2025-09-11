import { Component, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-sub-desc',
  templateUrl: './sub-desc.component.html',
  styleUrls: ['./sub-desc.component.scss']
})
export class SubDescComponent {
  @Input() subDesc: any;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }
}
