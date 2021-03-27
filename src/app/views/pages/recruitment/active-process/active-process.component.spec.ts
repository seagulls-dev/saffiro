import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProcessComponent } from './active-process.component';

describe('ActiveProcessComponent', () => {
  let component: ActiveProcessComponent;
  let fixture: ComponentFixture<ActiveProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
