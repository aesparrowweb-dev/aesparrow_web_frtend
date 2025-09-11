import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceBannerComponent } from './component/service-banner/service-banner.component';
import { ServiceDescComponent } from './component/service-desc/service-desc.component';
import { ConclusionComponent } from './component/conclusion/conclusion.component';
import { WhyChooseComponent } from './component/why-choose/why-choose.component';
import { MainServicesComponent } from './component/main-services/main-services.component';
import { ChildrenServicesComponent } from './component/children-services/children-services.component';


@NgModule({
  declarations: [
    ServiceComponent,
    ServiceBannerComponent,
    ServiceDescComponent,
    ConclusionComponent,
    WhyChooseComponent,
    MainServicesComponent,
    ChildrenServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
