import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoSoliComponent } from './prestamo-soli.component';

describe('PrestamoSoliComponent', () => {
  let component: PrestamoSoliComponent;
  let fixture: ComponentFixture<PrestamoSoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoSoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
