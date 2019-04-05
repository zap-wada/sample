import { PostQuery } from './post.query';
import { PostStore } from './post.store';

describe('PostQuery', () => {
  let query: PostQuery;

  beforeEach(() => {
    query = new PostQuery(new PostStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
