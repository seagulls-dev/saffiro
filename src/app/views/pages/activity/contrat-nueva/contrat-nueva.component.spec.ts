import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratNuevaComponent } from './contrat-nueva.component';

describe('ContratNuevaComponent', () => {
  let component: ContratNuevaComponent;
  let fixture: ComponentFixture<ContratNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
