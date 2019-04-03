import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { PostListStore } from './post-list.store';
import { PostList } from './post-list.model';

@Injectable({ providedIn: 'root' })
export class PostListService {

  constructor(private postListStore: PostListStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.postListStore.set(entities));
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
