import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityListsComponent } from './security-lists.component';

describe('SecurityListsComponent', () => {
  let component: SecurityListsComponent;
  let fixture: ComponentFixture<SecurityListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityListsComponent]
    });
    fixture = TestBed.createComponent(SecurityListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
