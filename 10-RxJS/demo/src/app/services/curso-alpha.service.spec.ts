import { TestBed } from '@angular/core/testing';

import { CursoAlphaService } from './curso-alpha.service';

describe('CursoAlphaService', () => {
  let service: CursoAlphaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoAlphaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
