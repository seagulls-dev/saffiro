import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaNuevaComponent } from './campana-nueva.component';

describe('CampanaNuevaComponent', () => {
  let component: CampanaNuevaComponent;
  let fixture: ComponentFixture<CampanaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
