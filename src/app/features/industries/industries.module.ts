import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { IndustriesBannerComponent } from './component/industries-banner/industries-banner.component';
import { IndustriesListComponent } from './component/industries-list/industries-list.component';


@NgModule({
  declarations: [
    IndustriesComponent,
    IndustriesBannerComponent,
    IndustriesListComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule { }
