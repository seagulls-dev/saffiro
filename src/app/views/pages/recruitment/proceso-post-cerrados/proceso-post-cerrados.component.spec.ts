import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoPostCerradosComponent } from './proceso-post-cerrados.component';

describe('ProcesoPostCerradosComponent', () => {
  let component: ProcesoPostCerradosComponent;
  let fixture: ComponentFixture<ProcesoPostCerradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoPostCerradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoPostCerradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
