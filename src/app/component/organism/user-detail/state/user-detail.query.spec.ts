import { UserDetailQuery } from './user-detail.query';
import { UserDetailStore } from './user-detail.store';

describe('UserDetailQuery', () => {
  let query: UserDetailQuery;

  beforeEach(() => {
    query = new UserDetailQuery(new UserDetailStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
