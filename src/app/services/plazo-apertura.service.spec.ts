import { TestBed } from '@angular/core/testing';

import { PlazoAperturaService } from './plazo-apertura.service';

describe('PlazoAperturaService', () => {
  let service: PlazoAperturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlazoAperturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
