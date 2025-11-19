import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../shared/shared/shared.module';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogBannerComponent } from './components/blog-banner/blog-banner.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailBannerComponent } from './components/blog-detail-banner/blog-detail-banner.component';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    BlogBannerComponent,
    BlogDetailComponent,
    BlogDetailBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogsModule { }
