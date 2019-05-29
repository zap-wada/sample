import { UserDetailStore } from './user-detail.store';

describe('UserDetailStore', () => {
  let store: UserDetailStore;

  beforeEach(() => {
    store = new UserDetailStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
