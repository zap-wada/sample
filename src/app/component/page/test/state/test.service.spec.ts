import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestService } from './test.service';
import { TestStore } from './test.store';

describe('TestService', () => {
  let testService: TestService;
  let testStore: TestStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService, TestStore],
      imports: [ HttpClientTestingModule ]
    });

    testService = TestBed.get(TestService);
    testStore = TestBed.get(TestStore);
  });

  it('should be created', () => {
    expect(testService).toBeDefined();
  });

});
