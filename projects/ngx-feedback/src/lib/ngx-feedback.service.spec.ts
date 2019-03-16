import { TestBed } from '@angular/core/testing';

import { NgxFeedbackService } from './ngx-feedback.service';

describe('NgxFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFeedbackService = TestBed.get(NgxFeedbackService);
    expect(service).toBeTruthy();
  });
});
