import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ModalStore, ModalState } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalQuery extends Query<ModalState> {
  store$ = this.select(state => state);

  constructor(protected store: ModalStore) {
    super(store);
  }
}
