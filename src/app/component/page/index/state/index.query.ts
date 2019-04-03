import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IndexStore, IndexState } from './index.store';
import { Index } from './index.model';

@Injectable({
  providedIn: 'root'
})
export class IndexQuery extends QueryEntity<IndexState, Index> {
  store$ = this.select(state => state);
  posts$ = this.selectAll();

  constructor(protected store: IndexStore) {
    super(store);
  }
}
