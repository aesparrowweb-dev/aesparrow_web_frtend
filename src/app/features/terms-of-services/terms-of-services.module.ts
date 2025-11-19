import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfServicesRoutingModule } from './terms-of-services-routing.module';
import { TermsBannerComponent } from './components/terms-banner/terms-banner.component';
import { TermsListsComponent } from './components/terms-lists/terms-lists.component';
import { TermsOfServicesComponent } from './terms-of-services.component';


@NgModule({
  declarations: [
    TermsBannerComponent,
    TermsListsComponent,
    TermsOfServicesComponent
  ],
  imports: [
    CommonModule,
    TermsOfServicesRoutingModule
  ]
})
export class TermsOfServicesModule { }
