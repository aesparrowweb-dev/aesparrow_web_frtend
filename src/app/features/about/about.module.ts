import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { VisionComponent } from './components/vision/vision.component';
import { SharedModule } from '../shared/shared/shared.module';
import { IndustriesWeServeComponent } from './components/industries-we-serve/industries-we-serve.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutBannerComponent,
    AboutSectionComponent,
    WhoWeAreComponent,
    OurTeamComponent,
    OurClientsComponent,
    CertificationsComponent,
    VisionComponent,
    IndustriesWeServeComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
