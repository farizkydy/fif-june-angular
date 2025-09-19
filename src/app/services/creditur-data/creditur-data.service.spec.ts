import { TestBed } from '@angular/core/testing';

import { CrediturDataService } from './creditur-data.service';

describe('CrediturDataService', () => {
  let service: CrediturDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrediturDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
