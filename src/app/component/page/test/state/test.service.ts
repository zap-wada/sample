import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TestStore } from './test.store';
import { Test } from './test.model';

@Injectable({ providedIn: 'root' })
export class TestService {

  constructor(private testStore: TestStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.testStore.set(entities));
  }

  add(test: Test) {
    this.testStore.add(test);
  }

  update(id, test: Partial<Test>) {
    this.testStore.update(id, test);
  }

  remove(id: ID) {
    this.testStore.remove(id);
  }
}
