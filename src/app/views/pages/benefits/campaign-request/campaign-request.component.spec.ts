import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRequestComponent } from './campaign-request.component';

describe('CampaignRequestComponent', () => {
  let component: CampaignRequestComponent;
  let fixture: ComponentFixture<CampaignRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
