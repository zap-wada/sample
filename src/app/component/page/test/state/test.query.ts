import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TestStore, TestState } from './test.store';
import { Test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TestQuery extends QueryEntity<TestState, Test> {

  constructor(protected store: TestStore) {
    super(store);
  }

}
