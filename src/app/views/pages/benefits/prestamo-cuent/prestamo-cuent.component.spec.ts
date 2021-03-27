import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoCuentComponent } from './prestamo-cuent.component';

describe('PrestamoCuentComponent', () => {
  let component: PrestamoCuentComponent;
  let fixture: ComponentFixture<PrestamoCuentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoCuentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoCuentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
