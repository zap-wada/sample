import { ID } from '@datorama/akita';

export interface Post {
  id: ID;
  userId: number;
  title: string;
  body: string;
}

/**
 * A factory function that creates Post
 */
export function createPost(params: Partial<Post>) {
  return {
    id: params.id,
    userId: params.userId,
    title: params.title,
    body: params.body
  };
}
