import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoNuevaComponent } from './prestamo-nueva.component';

describe('PrestamoNuevaComponent', () => {
  let component: PrestamoNuevaComponent;
  let fixture: ComponentFixture<PrestamoNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
