import { TestBed } from '@angular/core/testing';

import { ProtectadminService } from './protectadmin.service';

describe('ProtectadminService', () => {
  let service: ProtectadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
