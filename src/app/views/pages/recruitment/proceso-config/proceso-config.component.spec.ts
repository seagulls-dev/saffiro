import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoConfigComponent } from './proceso-config.component';

describe('ProcesoConfigComponent', () => {
  let component: ProcesoConfigComponent;
  let fixture: ComponentFixture<ProcesoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
