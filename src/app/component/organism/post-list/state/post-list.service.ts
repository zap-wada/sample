import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { PostListStore } from './post-list.store';

@Injectable({ providedIn: 'root' })
export class PostListService {
  constructor(private postListStore: PostListStore, private apiService: ApiService) {}

  getPostByUserId(userId?: number) {
    this.apiService.getPosts(userId ? { userId } : undefined).subscribe(entities => this.postListStore.set(entities));
  }

  getPostByPostId(postId: number) {
    this.apiService.getPost(postId).subscribe(content => this.postListStore.set([content]));
  }

  reset() {
    this.postListStore.reset();
  }
}
