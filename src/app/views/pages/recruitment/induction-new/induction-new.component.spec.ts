import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionNewComponent } from './induction-new.component';

describe('InductionNewComponent', () => {
  let component: InductionNewComponent;
  let fixture: ComponentFixture<InductionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
