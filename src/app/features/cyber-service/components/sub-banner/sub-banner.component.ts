import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.scss']
})
export class SubBannerComponent {

  @Input() subBanner:any;
  @Input() mainData:any;


}
