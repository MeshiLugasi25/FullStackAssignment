import { TestBed } from '@angular/core/testing';

import { MeshiServiceService } from './meshi-service.service';

describe('MeshiServiceService', () => {
  let service: MeshiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeshiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
