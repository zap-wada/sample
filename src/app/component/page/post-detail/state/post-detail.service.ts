import { Injectable } from '@angular/core';
import { PostDetailStore } from './post-detail.store';
import { ApiService } from 'src/app/service/api.service';

@Injectable({ providedIn: 'root' })
export class PostDetailService {
  constructor(private api: ApiService, private store: PostDetailStore) {}

  get(id: number) {
    this.api
      .getPost(id)
      .subscribe(content => this.store.update(content as any));
  }
}
