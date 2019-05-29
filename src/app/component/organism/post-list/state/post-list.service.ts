import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';
import { PostListStore } from './post-list.store';

@Injectable({ providedIn: 'root' })
export class PostListService {
  constructor(private postListStore: PostListStore, private apiService: ApiService) {}

  get(userId?: number) {
    this.apiService.getPosts(userId ? { userId } : undefined).subscribe(entities => this.postListStore.set(entities));
  }

  getPost(postId: number) {
    this.apiService.getPost(postId).subscribe(content => this.postListStore.set([content]));
  }

  add(post: Post) {
    this.postListStore.add(post);
  }

  update(id, post: Partial<Post>) {
    this.postListStore.update(id, post);
  }

  remove(id: ID) {
    this.postListStore.remove(id);
  }

  reset() {
    this.postListStore.set([]);
  }
}
