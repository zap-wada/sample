import { PostListStore } from './post-list.store';

describe('PostListStore', () => {
  let store: PostListStore;

  beforeEach(() => {
    store = new PostListStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
