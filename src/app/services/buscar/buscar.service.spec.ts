import { TestBed } from '@angular/core/testing';

import { BuscarService } from './buscar.service';

describe('BuscarService', () => {
  let service: BuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
