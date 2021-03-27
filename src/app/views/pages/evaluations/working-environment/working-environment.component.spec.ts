import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingEnvironmentComponent } from './working-environment.component';

describe('WorkingEnvironmentComponent', () => {
  let component: WorkingEnvironmentComponent;
  let fixture: ComponentFixture<WorkingEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
