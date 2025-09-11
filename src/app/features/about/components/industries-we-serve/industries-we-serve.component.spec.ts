import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesWeServeComponent } from './industries-we-serve.component';

describe('IndustriesWeServeComponent', () => {
  let component: IndustriesWeServeComponent;
  let fixture: ComponentFixture<IndustriesWeServeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesWeServeComponent]
    });
    fixture = TestBed.createComponent(IndustriesWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
