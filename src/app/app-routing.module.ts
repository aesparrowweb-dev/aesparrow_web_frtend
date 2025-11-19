import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './features/blogs/components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'industries',
    loadChildren: () => import('./features/industries/industries.module').then(m => m.IndustriesModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./features/career/career.module').then(m => m.CareerModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'service/:id/:subId',
    loadChildren: () => import('./features/cyber-service/cyber-service.module').then(m => m.CyberServiceModule)
  },
  {
    path: 'service/:id',
    loadChildren: () => import('./features/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./features/terms-of-services/terms-of-services.module').then(m => m.TermsOfServicesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
