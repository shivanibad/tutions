import { TestBed } from '@angular/core/testing';

import { TeacherUserService } from './teacher-user.service';

describe('TeacherUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherUserService = TestBed.get(TeacherUserService);
    expect(service).toBeTruthy();
  });
});
