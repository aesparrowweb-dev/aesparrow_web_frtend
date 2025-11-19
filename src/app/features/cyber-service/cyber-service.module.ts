import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberServiceRoutingModule } from './cyber-service-routing.module';
import { CyberServiceComponent } from './cyber-service.component';
import { IncludesComponent } from './components/includes/includes.component';
import { BenifitsComponent } from './components/benifits/benifits.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { SecurityListsComponent } from './components/security-lists/security-lists.component';
import { SubBannerComponent } from './components/sub-banner/sub-banner.component';
import { SubDescComponent } from './components/sub-desc/sub-desc.component';
import { TestComponent } from './components/test/test.component';
import { ToolsComponent } from './components/tools/tools.component';
import { MethadologyComponent } from './components/methadology/methadology.component';
import { CyberPolicyComponent } from './components/cyber-policy/cyber-policy.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    CyberServiceComponent,
    IncludesComponent,
    BenifitsComponent,
    OtherServicesComponent,
    SecurityListsComponent,
    SubBannerComponent,
    SubDescComponent,
    TestComponent,
    ToolsComponent,
    MethadologyComponent,
    CyberPolicyComponent
  ],
  imports: [
    CommonModule,
    CyberServiceRoutingModule,
    SharedModule
  ]
})
export class CyberServiceModule { }
