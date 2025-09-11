import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  ngOnInit() {
    AOS.init();
  }
}
