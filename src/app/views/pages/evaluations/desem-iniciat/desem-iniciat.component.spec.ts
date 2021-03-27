import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesemIniciatComponent } from './desem-iniciat.component';

describe('DesemIniciatComponent', () => {
  let component: DesemIniciatComponent;
  let fixture: ComponentFixture<DesemIniciatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesemIniciatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesemIniciatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
