import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcessConfigComponent } from './new-process-config.component';

describe('NewProcessConfigComponent', () => {
  let component: NewProcessConfigComponent;
  let fixture: ComponentFixture<NewProcessConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcessConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
