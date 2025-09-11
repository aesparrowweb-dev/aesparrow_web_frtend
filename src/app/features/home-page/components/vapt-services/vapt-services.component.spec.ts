import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaptServicesComponent } from './vapt-services.component';

describe('VaptServicesComponent', () => {
  let component: VaptServicesComponent;
  let fixture: ComponentFixture<VaptServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaptServicesComponent]
    });
    fixture = TestBed.createComponent(VaptServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
