import { TestBed } from '@angular/core/testing';

import { TodosApiService } from './todos.api.service';

describe('Todos.ApiService', () => {
  let service: TodosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
