import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoContCerradosComponent } from './proceso-cont-cerrados.component';

describe('ProcesoContCerradosComponent', () => {
  let component: ProcesoContCerradosComponent;
  let fixture: ComponentFixture<ProcesoContCerradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoContCerradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoContCerradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
