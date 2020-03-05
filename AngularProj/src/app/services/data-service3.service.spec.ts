import { TestBed } from '@angular/core/testing';

import { DataService3Service } from './data-service3.service';

describe('DataService3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService3Service = TestBed.get(DataService3Service);
    expect(service).toBeTruthy();
  });
});
