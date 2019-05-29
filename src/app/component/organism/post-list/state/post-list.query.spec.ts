import { PostListQuery } from './post-list.query';
import { PostListStore } from './post-list.store';

describe('PostListQuery', () => {
  let query: PostListQuery;

  beforeEach(() => {
    query = new PostListQuery(new PostListStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
