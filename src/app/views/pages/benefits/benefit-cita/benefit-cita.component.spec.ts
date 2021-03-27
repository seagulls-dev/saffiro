import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitCitaComponent } from './benefit-cita.component';

describe('BenefitCitaComponent', () => {
  let component: BenefitCitaComponent;
  let fixture: ComponentFixture<BenefitCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
