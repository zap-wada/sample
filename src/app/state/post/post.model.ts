import { ID } from '@datorama/akita';

export interface Post {
  id: ID;
}

/**
 * A factory function that creates Post
 */
export function createPost(params: Partial<Post>) {
  return {

  } as Post;
}
