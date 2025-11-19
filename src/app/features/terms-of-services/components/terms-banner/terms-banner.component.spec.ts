import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsBannerComponent } from './terms-banner.component';

describe('TermsBannerComponent', () => {
  let component: TermsBannerComponent;
  let fixture: ComponentFixture<TermsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsBannerComponent]
    });
    fixture = TestBed.createComponent(TermsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
