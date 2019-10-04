import { TestBed } from '@angular/core/testing';

import { IngProjectService } from './ing-project.service';

describe('IngProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngProjectService = TestBed.get(IngProjectService);
    expect(service).toBeTruthy();
  });
});
