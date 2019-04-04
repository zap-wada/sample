import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IndexStore, IndexState } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexQuery extends Query<IndexState> {
  store$ = this.select(state => state);

  constructor(protected store: IndexStore) {
    super(store);
  }
}
