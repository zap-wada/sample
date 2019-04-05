import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ModalState {
  isOpened: boolean;
}

export function createInitialState(): ModalState {
  return {
    isOpened: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'modal' })
export class ModalStore extends Store<ModalState> {
  constructor() {
    super(createInitialState());
  }
}
