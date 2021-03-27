import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesemResulComponent } from './desem-resul.component';

describe('DesemResulComponent', () => {
  let component: DesemResulComponent;
  let fixture: ComponentFixture<DesemResulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesemResulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesemResulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
