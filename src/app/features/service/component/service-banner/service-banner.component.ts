import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-banner',
  templateUrl: './service-banner.component.html',
  styleUrls: ['./service-banner.component.scss']
})
export class ServiceBannerComponent {

  @Input() serviceBanner:any;

  ngOnInit(){
    
  }

}
