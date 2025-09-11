import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career.component';
import { CareerFormComponent } from './components/career-form/career-form.component';
import { CareerListComponent } from './components/career-list/career-list.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent
  },
  {
    path: 'job-list',
    component: CareerListComponent
  },
  {
    path: 'career-form',
    component: CareerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
