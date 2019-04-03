import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { IndexStore } from './index.store';
import { Index } from './index.model';

@Injectable({ providedIn: 'root' })
export class IndexService {

  constructor(private indexStore: IndexStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.indexStore.set(entities));
  }

  add(index: Index) {
    this.indexStore.add(index);
  }

  update(id, index: Partial<Index>) {
    this.indexStore.update(id, index);
  }

  remove(id: ID) {
    this.indexStore.remove(id);
  }
}
