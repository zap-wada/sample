import { PostDetailStore } from './post-detail.store';

describe('PostDetailStore', () => {
  let store: PostDetailStore;

  beforeEach(() => {
    store = new PostDetailStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
