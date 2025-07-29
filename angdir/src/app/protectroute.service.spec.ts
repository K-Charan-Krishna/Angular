import { TestBed } from '@angular/core/testing';

import { ProtectrouteService } from './protectroute.service';

describe('ProtectrouteService', () => {
  let service: ProtectrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
