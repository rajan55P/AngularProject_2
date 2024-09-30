import { TestBed } from '@angular/core/testing';

import { FileProcessingServiceService } from './file-processing-service.service';

describe('FileProcessingServiceService', () => {
  let service: FileProcessingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileProcessingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
