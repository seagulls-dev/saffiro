import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoNuevoComponent } from './proceso-nuevo.component';

describe('ProcesoNuevoComponent', () => {
  let component: ProcesoNuevoComponent;
  let fixture: ComponentFixture<ProcesoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
