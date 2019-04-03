import { TestQuery } from './test.query';
import { TestStore } from './test.store';

describe('TestQuery', () => {
  let query: TestQuery;

  beforeEach(() => {
    query = new TestQuery(new TestStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
