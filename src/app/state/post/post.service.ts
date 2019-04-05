import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Post } from './post.model';
import { ApiService } from 'src/app/service/api.service';
import { PostStore } from './post.store';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private api: ApiService, private postStore: PostStore) {}

  get(userId?: number) {
    this.api
      .getPosts(userId ? { userId } : undefined)
      .subscribe(entities => this.postStore.set(entities));
  }

  getPost(postId: number) {
    this.api
      .getPost(postId)
      .subscribe(content => this.postStore.set([content]));
  }

  add(post: Post) {
    this.postStore.add(post);
  }

  update(id, post: Partial<Post>) {
    this.postStore.update(id, post);
  }

  remove(id: ID) {
    this.postStore.remove(id);
  }

  reset() {
    this.postStore.set([]);
  }
}
