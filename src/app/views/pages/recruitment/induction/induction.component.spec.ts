import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionComponent } from './induction.component';

describe('InductionComponent', () => {
  let component: InductionComponent;
  let fixture: ComponentFixture<InductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
