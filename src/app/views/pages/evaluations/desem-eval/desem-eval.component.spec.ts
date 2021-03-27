import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesemEvalComponent } from './desem-eval.component';

describe('DesemEvalComponent', () => {
  let component: DesemEvalComponent;
  let fixture: ComponentFixture<DesemEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesemEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesemEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
