import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratServicePagoComponent } from './contrat-service-pago.component';

describe('ContratServicePagoComponent', () => {
  let component: ContratServicePagoComponent;
  let fixture: ComponentFixture<ContratServicePagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratServicePagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratServicePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
