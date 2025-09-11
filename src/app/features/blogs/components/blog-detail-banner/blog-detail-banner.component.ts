import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-detail-banner',
  templateUrl: './blog-detail-banner.component.html',
  styleUrls: ['./blog-detail-banner.component.scss']
})
export class BlogDetailBannerComponent {
  @Input() blogId: any;
  blogTitle:any;

  ngOnInit(){
    this.blogTitle = this.blogId.title;
  }
}
