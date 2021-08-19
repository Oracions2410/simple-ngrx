import { TestBed } from '@angular/core/testing';

import { IsTodosLoadedGuard } from './is-todos-loaded.guard';

describe('IsTodosLoadedGuard', () => {
  let guard: IsTodosLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsTodosLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
