import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoPostComponent } from './proceso-post.component';

describe('ProcesoPostComponent', () => {
  let component: ProcesoPostComponent;
  let fixture: ComponentFixture<ProcesoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
