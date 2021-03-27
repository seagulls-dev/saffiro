import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitSoliComponent } from './benefit-soli.component';

describe('BenefitSoliComponent', () => {
  let component: BenefitSoliComponent;
  let fixture: ComponentFixture<BenefitSoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitSoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
