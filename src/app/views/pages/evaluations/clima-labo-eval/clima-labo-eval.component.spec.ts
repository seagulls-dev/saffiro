import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaLaboEvalComponent } from './clima-labo-eval.component';

describe('ClimaLaboEvalComponent', () => {
  let component: ClimaLaboEvalComponent;
  let fixture: ComponentFixture<ClimaLaboEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaLaboEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaLaboEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
