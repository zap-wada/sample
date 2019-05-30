import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PostList } from './post-list.model';
import { PostListState, PostListStore } from './post-list.store';

@Injectable({
  providedIn: 'root'
})
export class PostListQuery extends QueryEntity<PostListState, PostList> {
  posts$: Observable<PostList[]>;

  constructor(protected store: PostListStore) {
    super(store);
    this.posts$ = this.selectAll();
  }
}
