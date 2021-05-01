import { TestBed } from '@angular/core/testing';

import { AuthPhysioGuardService } from './auth-physio-guard.service';

describe('AuthPhysioGuardService', () => {
  let service: AuthPhysioGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPhysioGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
