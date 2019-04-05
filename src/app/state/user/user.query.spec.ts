import { UserQuery } from './user.query';
import { UserStore } from './user.store';

describe('UserQuery', () => {
  let query: UserQuery;

  beforeEach(() => {
    query = new UserQuery(new UserStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
