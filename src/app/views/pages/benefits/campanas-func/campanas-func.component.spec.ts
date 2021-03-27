import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanasFuncComponent } from './campanas-func.component';

describe('CampanasFuncComponent', () => {
  let component: CampanasFuncComponent;
  let fixture: ComponentFixture<CampanasFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanasFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanasFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
