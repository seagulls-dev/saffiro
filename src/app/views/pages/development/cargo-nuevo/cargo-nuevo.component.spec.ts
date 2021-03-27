import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoNuevoComponent } from './cargo-nuevo.component';

describe('CargoNuevoComponent', () => {
  let component: CargoNuevoComponent;
  let fixture: ComponentFixture<CargoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
