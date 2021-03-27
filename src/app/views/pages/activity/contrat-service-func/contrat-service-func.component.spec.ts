import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratServiceFuncComponent } from './contrat-service-func.component';

describe('ContratServiceFuncComponent', () => {
  let component: ContratServiceFuncComponent;
  let fixture: ComponentFixture<ContratServiceFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratServiceFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratServiceFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
