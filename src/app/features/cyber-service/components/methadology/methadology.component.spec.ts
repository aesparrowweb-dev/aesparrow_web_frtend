import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethadologyComponent } from './methadology.component';

describe('MethadologyComponent', () => {
  let component: MethadologyComponent;
  let fixture: ComponentFixture<MethadologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethadologyComponent]
    });
    fixture = TestBed.createComponent(MethadologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
