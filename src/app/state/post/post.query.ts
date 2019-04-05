import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PostStore, PostState } from './post.store';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostQuery extends QueryEntity<PostState, Post> {

  constructor(protected store: PostStore) {
    super(store);
  }

}
