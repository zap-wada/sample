import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { PostStore } from './post.store';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(private postStore: PostStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.postStore.set(entities));
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
}
