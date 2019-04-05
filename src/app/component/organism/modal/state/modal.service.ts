import { Injectable } from '@angular/core';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private modalStore: ModalStore) {}

  switchFlag(isOpened: boolean) {
    this.modalStore.update({ isOpened });
  }
}
