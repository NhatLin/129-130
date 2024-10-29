import { TestBed } from '@angular/core/testing';

import { FashionAPIServiceService } from './fashion-apiservice.service';

describe('FashionAPIServiceService', () => {
  let service: FashionAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
