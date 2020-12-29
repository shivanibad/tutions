import { TestBed } from '@angular/core/testing';

import { StudentUserService } from './student-user.service';

describe('StudentUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentUserService = TestBed.get(StudentUserService);
    expect(service).toBeTruthy();
  });
});
