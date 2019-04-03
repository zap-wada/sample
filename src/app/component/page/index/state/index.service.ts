import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { IndexStore } from './index.store';
import { Index } from './index.model';
import { ApiService } from 'src/app/service/api.service';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(private indexStore: IndexStore, private api: ApiService) {}

  get(id?: number) {
    const params = id ? { userId: id } : undefined;
    this.api
      .getPost(params)
      .subscribe(entities => this.indexStore.set(entities));
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
