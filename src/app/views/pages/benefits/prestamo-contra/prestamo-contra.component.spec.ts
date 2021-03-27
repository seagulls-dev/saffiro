import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoContraComponent } from './prestamo-contra.component';

describe('PrestamoContraComponent', () => {
  let component: PrestamoContraComponent;
  let fixture: ComponentFixture<PrestamoContraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoContraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
