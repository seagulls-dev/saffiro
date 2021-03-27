import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoPagoComponent } from './prestamo-pago.component';

describe('PrestamoPagoComponent', () => {
  let component: PrestamoPagoComponent;
  let fixture: ComponentFixture<PrestamoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
