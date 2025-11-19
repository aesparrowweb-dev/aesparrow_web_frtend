import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenServicesComponent } from './children-services.component';

describe('ChildrenServicesComponent', () => {
  let component: ChildrenServicesComponent;
  let fixture: ComponentFixture<ChildrenServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenServicesComponent]
    });
    fixture = TestBed.createComponent(ChildrenServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
