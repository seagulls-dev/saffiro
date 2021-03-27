import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitRequestComponent } from './benefit-request.component';

describe('BenefitRequestComponent', () => {
  let component: BenefitRequestComponent;
  let fixture: ComponentFixture<BenefitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
