import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaLaboralNueComponent } from './clima-laboral-nue.component';

describe('ClimaLaboralNueComponent', () => {
  let component: ClimaLaboralNueComponent;
  let fixture: ComponentFixture<ClimaLaboralNueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaLaboralNueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaLaboralNueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
