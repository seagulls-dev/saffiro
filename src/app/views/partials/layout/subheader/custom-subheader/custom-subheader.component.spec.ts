import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSubheaderComponent } from './custom-subheader.component';

describe('CustomSubheaderComponent', () => {
  let component: CustomSubheaderComponent;
  let fixture: ComponentFixture<CustomSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
