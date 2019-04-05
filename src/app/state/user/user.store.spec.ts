import { UserStore } from './user.store';

describe('UserStore', () => {
  let store: UserStore;

  beforeEach(() => {
    store = new UserStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
