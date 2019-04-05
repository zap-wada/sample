import { PostStore } from './post.store';

describe('PostStore', () => {
  let store: PostStore;

  beforeEach(() => {
    store = new PostStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
