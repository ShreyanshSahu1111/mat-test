import { TestBed } from '@angular/core/testing';

import { GetRecentMoviesService } from './get-recent-movies.service';

describe('GetRecentMoviesService', () => {
  let service: GetRecentMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecentMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
