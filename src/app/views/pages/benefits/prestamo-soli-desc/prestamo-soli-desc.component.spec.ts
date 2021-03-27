import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoSoliDescComponent } from './prestamo-soli-desc.component';

describe('PrestamoSoliDescComponent', () => {
  let component: PrestamoSoliDescComponent;
  let fixture: ComponentFixture<PrestamoSoliDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoSoliDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoSoliDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
