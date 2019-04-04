import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PostDetailState {
   key: string;
}

export function createInitialState(): PostDetailState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'post-detail' })
export class PostDetailStore extends Store<PostDetailState> {

  constructor() {
    super(createInitialState());
  }

}

