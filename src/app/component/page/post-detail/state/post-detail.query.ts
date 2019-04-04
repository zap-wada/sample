import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PostDetailStore, PostDetailState } from './post-detail.store';

@Injectable({ providedIn: 'root' })
export class PostDetailQuery extends Query<PostDetailState> {

  constructor(protected store: PostDetailStore) {
    super(store);
  }

}
