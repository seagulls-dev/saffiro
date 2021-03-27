import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistComComponent } from './asist-com.component';

describe('AsistComComponent', () => {
  let component: AsistComComponent;
  let fixture: ComponentFixture<AsistComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
