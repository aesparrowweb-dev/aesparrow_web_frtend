import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesListComponent } from './industries-list.component';

describe('IndustriesListComponent', () => {
  let component: IndustriesListComponent;
  let fixture: ComponentFixture<IndustriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesListComponent]
    });
    fixture = TestBed.createComponent(IndustriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
