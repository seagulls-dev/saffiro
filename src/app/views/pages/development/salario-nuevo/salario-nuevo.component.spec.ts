import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioNuevoComponent } from './salario-nuevo.component';

describe('SalarioNuevoComponent', () => {
  let component: SalarioNuevoComponent;
  let fixture: ComponentFixture<SalarioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
