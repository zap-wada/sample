import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PostListStore } from './post-list.store';
import { PostList } from './post-list.model';
import { ApiService } from 'src/app/service/api.service';

@Injectable({ providedIn: 'root' })
export class PostListService {
  constructor(private postListStore: PostListStore, private api: ApiService) {}

  get(id?: number) {
    this.api
      .getPosts(id ? { userId: id } : undefined)
      .subscribe(entities => this.postListStore.set(entities));
  }

  add(postList: PostList) {
    this.postListStore.add(postList);
  }

  update(id, postList: Partial<PostList>) {
    this.postListStore.update(id, postList);
  }

  remove(id: ID) {
    this.postListStore.remove(id);
  }
}
