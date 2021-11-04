import { TestBed } from '@angular/core/testing';

import { NgxFeedbackMapsService } from './ngx-feedback-maps.service';

describe('NgxFeedbackMapsService', () => {
  let service: NgxFeedbackMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFeedbackMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
