import { ID } from '@datorama/akita';

export interface PostList {
  id: ID;
}

/**
 * A factory function that creates PostList
 */
export function createPostList(params: Partial<PostList>) {
  return {

  } as PostList;
}
