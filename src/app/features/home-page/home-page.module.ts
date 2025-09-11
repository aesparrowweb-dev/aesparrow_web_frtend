import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { TrustedComponent } from './components/trusted/trusted.component';
import { AesparrowComponent } from './components/aesparrow/aesparrow.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { VaptServicesComponent } from './components/vapt-services/vapt-services.component';

@NgModule({
  declarations: [
    HomePageComponent,
        HomeBannerComponent,
        ServicesListComponent,
        TrustedComponent,
        AesparrowComponent,
        WhyChooseUsComponent,
        ProjectListsComponent,
        BlogsComponent,
        TestimonialsComponent,
        AboutUsComponent,
        VaptServicesComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
