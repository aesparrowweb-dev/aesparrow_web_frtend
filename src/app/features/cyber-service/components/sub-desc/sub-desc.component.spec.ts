import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDescComponent } from './sub-desc.component';

describe('SubDescComponent', () => {
  let component: SubDescComponent;
  let fixture: ComponentFixture<SubDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubDescComponent]
    });
    fixture = TestBed.createComponent(SubDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
