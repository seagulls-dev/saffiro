import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesemIntegraComponent } from './desem-integra.component';

describe('DesemIntegraComponent', () => {
  let component: DesemIntegraComponent;
  let fixture: ComponentFixture<DesemIntegraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesemIntegraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesemIntegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
