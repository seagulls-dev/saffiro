import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaLaboIniciatComponent } from './clima-labo-iniciat.component';

describe('ClimaLaboIniciatComponent', () => {
  let component: ClimaLaboIniciatComponent;
  let fixture: ComponentFixture<ClimaLaboIniciatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaLaboIniciatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaLaboIniciatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
