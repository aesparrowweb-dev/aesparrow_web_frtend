import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailBannerComponent } from './blog-detail-banner.component';

describe('BlogDetailBannerComponent', () => {
  let component: BlogDetailBannerComponent;
  let fixture: ComponentFixture<BlogDetailBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailBannerComponent]
    });
    fixture = TestBed.createComponent(BlogDetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
