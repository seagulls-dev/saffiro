import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitaIntegraComponent } from './capacita-integra.component';

describe('CapacitaIntegraComponent', () => {
  let component: CapacitaIntegraComponent;
  let fixture: ComponentFixture<CapacitaIntegraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitaIntegraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitaIntegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
