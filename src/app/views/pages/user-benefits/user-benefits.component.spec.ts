import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBenefitsComponent } from './user-benefits.component';

describe('UserBenefitsComponent', () => {
  let component: UserBenefitsComponent;
  let fixture: ComponentFixture<UserBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
