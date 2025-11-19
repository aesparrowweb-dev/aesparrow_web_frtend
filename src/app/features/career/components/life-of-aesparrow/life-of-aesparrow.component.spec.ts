import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeOfAesparrowComponent } from './life-of-aesparrow.component';

describe('LifeOfAesparrowComponent', () => {
  let component: LifeOfAesparrowComponent;
  let fixture: ComponentFixture<LifeOfAesparrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeOfAesparrowComponent]
    });
    fixture = TestBed.createComponent(LifeOfAesparrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
