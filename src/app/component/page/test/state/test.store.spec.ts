import { TestStore } from './test.store';

describe('TestStore', () => {
  let store: TestStore;

  beforeEach(() => {
    store = new TestStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
