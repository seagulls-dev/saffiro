import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitaNuevaComponent } from './capacita-nueva.component';

describe('CapacitaNuevaComponent', () => {
  let component: CapacitaNuevaComponent;
  let fixture: ComponentFixture<CapacitaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
