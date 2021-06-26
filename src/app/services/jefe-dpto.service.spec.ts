import { TestBed } from '@angular/core/testing';

import { JefeDptoService } from './jefe-dpto.service';

describe('JefeDptoService', () => {
  let service: JefeDptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefeDptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
