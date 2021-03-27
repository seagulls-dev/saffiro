import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedProcessComponent } from './closed-process.component';

describe('ClosedProcessComponent', () => {
  let component: ClosedProcessComponent;
  let fixture: ComponentFixture<ClosedProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
