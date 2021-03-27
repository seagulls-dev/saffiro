import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractServiceComponent } from './contract-service.component';

describe('ContractServiceComponent', () => {
  let component: ContractServiceComponent;
  let fixture: ComponentFixture<ContractServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
