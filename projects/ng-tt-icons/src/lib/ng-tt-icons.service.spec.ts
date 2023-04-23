import { TestBed } from '@angular/core/testing';

import { NgTtIconsService } from './ng-tt-icons.service';

describe('NgTtIconsService', () => {
  let service: NgTtIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTtIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
