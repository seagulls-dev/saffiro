import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoContComponent } from './proceso-cont.component';

describe('ProcesoContComponent', () => {
  let component: ProcesoContComponent;
  let fixture: ComponentFixture<ProcesoContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
