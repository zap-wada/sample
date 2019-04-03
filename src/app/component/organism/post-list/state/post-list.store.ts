import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { PostList } from './post-list.model';

export interface PostListState extends EntityState<PostList> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'post-list' })
export class PostListStore extends EntityStore<PostListState, PostList> {
  constructor() {
    super();
  }
}
