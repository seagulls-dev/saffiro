import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBenefitsScheduleComponent } from './user-benefits-schedule.component';

describe('UserBenefitsScheduleComponent', () => {
  let component: UserBenefitsScheduleComponent;
  let fixture: ComponentFixture<UserBenefitsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBenefitsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBenefitsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
