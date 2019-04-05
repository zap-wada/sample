import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface IndexState {
  userIds: number[];
}

export function createInitialState(): IndexState {
  return {
    userIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'index' })
export class IndexStore extends Store<IndexState> {
  constructor() {
    super(createInitialState());
  }
}
