import { TestBed } from '@angular/core/testing';

import { SesionGuard } from './sesion.guard';

describe('SesionGuard', () => {
  let guard: SesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
