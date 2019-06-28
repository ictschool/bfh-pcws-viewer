import { TestBed } from '@angular/core/testing';

import { PcwsService } from './pcws.service';

describe('PcwsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PcwsService = TestBed.get(PcwsService);
    expect(service).toBeTruthy();
  });
});
