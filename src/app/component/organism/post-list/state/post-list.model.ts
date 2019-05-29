import { Post } from 'src/app/model/post.model';

export interface PostList extends Post {}

/**
 * A factory function that creates PostList
 */
export function createPostList(params: Partial<PostList>) {
  return {

  } as PostList;
}
