import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IndexState, IndexStore } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexQuery extends Query<IndexState> {
  store$ = this.select(state => state);

  constructor(protected store: IndexStore) {
    super(store);
  }
}
