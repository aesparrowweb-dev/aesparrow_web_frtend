import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionComponent } from './conclusion.component';

describe('ConclusionComponent', () => {
  let component: ConclusionComponent;
  let fixture: ComponentFixture<ConclusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionComponent]
    });
    fixture = TestBed.createComponent(ConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
