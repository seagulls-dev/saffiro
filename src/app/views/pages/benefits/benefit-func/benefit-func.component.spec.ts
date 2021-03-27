import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitFuncComponent } from './benefit-func.component';

describe('BenefitFuncComponent', () => {
  let component: BenefitFuncComponent;
  let fixture: ComponentFixture<BenefitFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
