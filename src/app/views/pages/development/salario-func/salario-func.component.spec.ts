import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioFuncComponent } from './salario-func.component';

describe('SalarioFuncComponent', () => {
  let component: SalarioFuncComponent;
  let fixture: ComponentFixture<SalarioFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarioFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarioFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
