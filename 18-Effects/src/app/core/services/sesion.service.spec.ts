import { TestBed } from '@angular/core/testing';

import { SesionService } from './sesion.service';

describe('SesionService', () => {
  let service: SesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
