import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Test } from './test.model';

export interface TestState extends EntityState<Test> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'test' })
export class TestStore extends EntityStore<TestState, Test> {

  constructor() {
    super();
  }

}

