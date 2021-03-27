import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecreEjecComponent } from './secre-ejec.component';

describe('SecreEjecComponent', () => {
  let component: SecreEjecComponent;
  let fixture: ComponentFixture<SecreEjecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecreEjecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecreEjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
