import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFeedbackComponent } from './ngx-feedback.component';

describe('NgxFeedbackComponent', () => {
  let component: NgxFeedbackComponent;
  let fixture: ComponentFixture<NgxFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
