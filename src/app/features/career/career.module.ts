import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { CareerBannerComponent } from './components/career-banner/career-banner.component';
import { SharedModule } from '../shared/shared/shared.module';
import { CareerListComponent } from './components/career-list/career-list.component';
import { CareerFormComponent } from './components/career-form/career-form.component';
import { LifeOfAesparrowComponent } from './components/life-of-aesparrow/life-of-aesparrow.component';

@NgModule({
  declarations: [
    CareerComponent,
    CareerBannerComponent,
    CareerListComponent,
    CareerFormComponent,
    LifeOfAesparrowComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    SharedModule
  ]
})
export class CareerModule { }
