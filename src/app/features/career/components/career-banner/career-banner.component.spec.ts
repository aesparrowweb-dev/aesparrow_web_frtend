import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBannerComponent } from './career-banner.component';

describe('CareerBannerComponent', () => {
  let component: CareerBannerComponent;
  let fixture: ComponentFixture<CareerBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerBannerComponent]
    });
    fixture = TestBed.createComponent(CareerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
