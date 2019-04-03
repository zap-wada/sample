import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PostListStore, PostListState } from './post-list.store';
import { PostList } from './post-list.model';

@Injectable({
  providedIn: 'root'
})
export class PostListQuery extends QueryEntity<PostListState, PostList> {
  posts$ = this.selectAll();

  constructor(protected store: PostListStore) {
    super(store);
  }
}
