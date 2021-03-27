import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBenefitsRequestsComponent } from './user-benefits-requests.component';

describe('UserBenefitsRequestsComponent', () => {
  let component: UserBenefitsRequestsComponent;
  let fixture: ComponentFixture<UserBenefitsRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBenefitsRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBenefitsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
