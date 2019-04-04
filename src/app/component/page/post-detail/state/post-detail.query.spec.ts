import { PostDetailQuery } from './post-detail.query';
import { PostDetailStore } from './post-detail.store';

describe('PostDetailQuery', () => {
  let query: PostDetailQuery;

  beforeEach(() => {
    query = new PostDetailQuery(new PostDetailStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
