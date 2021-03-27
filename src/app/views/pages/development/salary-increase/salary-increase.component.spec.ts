import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryIncreaseComponent } from './salary-increase.component';

describe('SalaryIncreaseComponent', () => {
  let component: SalaryIncreaseComponent;
  let fixture: ComponentFixture<SalaryIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
