import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoNuevoConfigComponent } from './proceso-nuevo-config.component';

describe('ProcesoNuevoConfigComponent', () => {
  let component: ProcesoNuevoConfigComponent;
  let fixture: ComponentFixture<ProcesoNuevoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoNuevoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoNuevoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
