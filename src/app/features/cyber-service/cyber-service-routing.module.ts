import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberServiceComponent } from './cyber-service.component';

const routes: Routes = [
  {
    path: '',
    component: CyberServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberServiceRoutingModule { }
