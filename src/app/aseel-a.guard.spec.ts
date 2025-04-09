import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { aseelAGuard } from './aseel-a.guard';

describe('aseelAGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aseelAGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
