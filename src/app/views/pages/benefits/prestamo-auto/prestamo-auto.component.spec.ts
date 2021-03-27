import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoAutoComponent } from './prestamo-auto.component';

describe('PrestamoAutoComponent', () => {
  let component: PrestamoAutoComponent;
  let fixture: ComponentFixture<PrestamoAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
