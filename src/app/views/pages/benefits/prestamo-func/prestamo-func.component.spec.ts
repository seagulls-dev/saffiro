import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoFuncComponent } from './prestamo-func.component';

describe('PrestamoFuncComponent', () => {
  let component: PrestamoFuncComponent;
  let fixture: ComponentFixture<PrestamoFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
