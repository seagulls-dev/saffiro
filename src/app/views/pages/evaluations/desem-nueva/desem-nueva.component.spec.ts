import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesemNuevaComponent } from './desem-nueva.component';

describe('DesemNuevaComponent', () => {
  let component: DesemNuevaComponent;
  let fixture: ComponentFixture<DesemNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesemNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesemNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
