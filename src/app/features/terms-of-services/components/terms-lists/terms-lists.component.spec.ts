import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsListsComponent } from './terms-lists.component';

describe('TermsListsComponent', () => {
  let component: TermsListsComponent;
  let fixture: ComponentFixture<TermsListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsListsComponent]
    });
    fixture = TestBed.createComponent(TermsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
