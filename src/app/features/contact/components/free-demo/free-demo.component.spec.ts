import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDemoComponent } from './free-demo.component';

describe('FreeDemoComponent', () => {
  let component: FreeDemoComponent;
  let fixture: ComponentFixture<FreeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeDemoComponent]
    });
    fixture = TestBed.createComponent(FreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
