import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberPolicyComponent } from './cyber-policy.component';

describe('CyberPolicyComponent', () => {
  let component: CyberPolicyComponent;
  let fixture: ComponentFixture<CyberPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberPolicyComponent]
    });
    fixture = TestBed.createComponent(CyberPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
