import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesBannerComponent } from './industries-banner.component';

describe('IndustriesBannerComponent', () => {
  let component: IndustriesBannerComponent;
  let fixture: ComponentFixture<IndustriesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesBannerComponent]
    });
    fixture = TestBed.createComponent(IndustriesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
