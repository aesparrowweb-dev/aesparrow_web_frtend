import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListsComponent } from './project-lists.component';

describe('ProjectListsComponent', () => {
  let component: ProjectListsComponent;
  let fixture: ComponentFixture<ProjectListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListsComponent]
    });
    fixture = TestBed.createComponent(ProjectListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
