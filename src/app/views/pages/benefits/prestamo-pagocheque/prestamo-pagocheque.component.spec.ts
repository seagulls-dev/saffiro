import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoPagochequeComponent } from './prestamo-pagocheque.component';

describe('PrestamoPagochequeComponent', () => {
  let component: PrestamoPagochequeComponent;
  let fixture: ComponentFixture<PrestamoPagochequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoPagochequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoPagochequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
