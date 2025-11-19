import { Component, Input } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent {

  @Input() conclusionService:any;

    ngOnInit(): void {
      AOS.init({
        duration: 1000, 
      });
    }

}
