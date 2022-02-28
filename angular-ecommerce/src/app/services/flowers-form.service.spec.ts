import { TestBed } from '@angular/core/testing';

import { FlowersFormService } from './flowers-form.service';

describe('FlowersFormService', () => {
  let service: FlowersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
