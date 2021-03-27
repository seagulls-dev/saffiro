import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoConfigSecreComponent } from './proceso-config-secre.component';

describe('ProcesoConfigSecreComponent', () => {
  let component: ProcesoConfigSecreComponent;
  let fixture: ComponentFixture<ProcesoConfigSecreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoConfigSecreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoConfigSecreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
