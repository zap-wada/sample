import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  vcr: ViewContainerRef;
  currentComponent = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private modalStore: ModalStore
  ) {}

  open(data: any): void {
    if (!data) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
    this.switchFlag(true);
  }

  close(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.switchFlag(false);
    }
  }

  switchFlag(isOpened: boolean) {
    this.modalStore.update({ isOpened });
  }
}
