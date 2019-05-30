import { BreadcrumbQuery } from './breadcrumb.query';
import { BreadcrumbStore } from './breadcrumb.store';

describe('BreadcrumbQuery', () => {
  let query: BreadcrumbQuery;

  beforeEach(() => {
    query = new BreadcrumbQuery(new BreadcrumbStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
