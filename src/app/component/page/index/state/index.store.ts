import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface IndexState {
   key: string;
}

export function createInitialState(): IndexState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'index' })
export class IndexStore extends Store<IndexState> {

  constructor() {
    super(createInitialState());
  }

}

