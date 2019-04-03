import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Index } from './index.model';

export interface IndexState extends EntityState<Index> {
  userIds: number[];
}

const initialState: IndexState = {
  userIds: [1, 2, 3, 4, 5]
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'index' })
export class IndexStore extends EntityStore<IndexState, Index> {
  constructor() {
    super(initialState);
  }
}
