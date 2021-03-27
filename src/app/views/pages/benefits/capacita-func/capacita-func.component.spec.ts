import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitaFuncComponent } from './capacita-func.component';

describe('CapacitaFuncComponent', () => {
  let component: CapacitaFuncComponent;
  let fixture: ComponentFixture<CapacitaFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitaFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitaFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
