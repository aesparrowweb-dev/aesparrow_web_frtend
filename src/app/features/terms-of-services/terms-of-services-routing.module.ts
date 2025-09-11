import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfServicesComponent } from './terms-of-services.component';

const routes: Routes = [
  {
    path: '',
    component: TermsOfServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfServicesRoutingModule { }
