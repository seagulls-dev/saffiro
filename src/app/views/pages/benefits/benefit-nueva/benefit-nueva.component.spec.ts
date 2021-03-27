import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitNuevaComponent } from './benefit-nueva.component';

describe('BenefitNuevaComponent', () => {
  let component: BenefitNuevaComponent;
  let fixture: ComponentFixture<BenefitNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
