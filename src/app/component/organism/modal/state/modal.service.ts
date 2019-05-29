import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
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
    this.switchOpenedFlag(true);
  }

  close(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.switchOpenedFlag(false);
    }
  }

  switchLoadingFlag(isLoading: boolean) {
    this.modalStore.setLoading(isLoading);
  }

  switchOpenedFlag(isOpened: boolean) {
    this.modalStore.update({ isOpened });
  }
}
