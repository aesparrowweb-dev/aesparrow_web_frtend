import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberServiceComponent } from './cyber-service.component';

describe('CyberServiceComponent', () => {
  let component: CyberServiceComponent;
  let fixture: ComponentFixture<CyberServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberServiceComponent]
    });
    fixture = TestBed.createComponent(CyberServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
