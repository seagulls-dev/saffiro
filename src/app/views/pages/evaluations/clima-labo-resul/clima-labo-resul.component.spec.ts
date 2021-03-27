import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaLaboResulComponent } from './clima-labo-resul.component';

describe('ClimaLaboResulComponent', () => {
  let component: ClimaLaboResulComponent;
  let fixture: ComponentFixture<ClimaLaboResulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaLaboResulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaLaboResulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
