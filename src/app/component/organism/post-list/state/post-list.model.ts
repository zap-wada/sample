import { ID } from '@datorama/akita';

export interface PostList {
  id: ID;
  userId: number;
  title: string;
  body: string;
}

/**
 * A factory function that creates PostList
 */
export function createPostList(params: Partial<PostList>) {
  return {
    id: params.id,
    userId: params.userId,
    title: params.title,
    body: params.body
  };
}
