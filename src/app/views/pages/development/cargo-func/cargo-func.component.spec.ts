import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoFuncComponent } from './cargo-func.component';

describe('CargoFuncComponent', () => {
  let component: CargoFuncComponent;
  let fixture: ComponentFixture<CargoFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
