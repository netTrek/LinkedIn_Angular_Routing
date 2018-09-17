import { TestBed, async, inject } from '@angular/core/testing';

import { UserdetailGuard } from './userdetail.guard';

describe('UserdetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdetailGuard]
    });
  });

  it('should ...', inject([UserdetailGuard], (guard: UserdetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
