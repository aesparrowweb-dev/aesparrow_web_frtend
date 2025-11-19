import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { MapComponent } from './components/map/map.component';
import { FormComponent } from './components/form/form.component';
import { FreeDemoComponent } from './components/free-demo/free-demo.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactBannerComponent,
    MapComponent,
    FormComponent,
    FreeDemoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
