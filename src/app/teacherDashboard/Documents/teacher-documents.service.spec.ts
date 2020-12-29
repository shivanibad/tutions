import { TestBed } from '@angular/core/testing';

import { TeacherDocumentsService } from './teacher-documents.service';

describe('TeacherDocumentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherDocumentsService = TestBed.get(TeacherDocumentsService);
    expect(service).toBeTruthy();
  });
});
