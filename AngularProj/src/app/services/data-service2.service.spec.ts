import { TestBed } from '@angular/core/testing';

import { DataService2Service } from './data-service2.service';

describe('DataService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService2Service = TestBed.get(DataService2Service);
    expect(service).toBeTruthy();
  });
});
