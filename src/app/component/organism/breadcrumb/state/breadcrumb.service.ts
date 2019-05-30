import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbStore } from './breadcrumb.store';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  constructor(private breadcrumbStore: BreadcrumbStore, private http: HttpClient) {}

  set(breads: Breadcrumb[]) {
    this.breadcrumbStore.set(breads);
  }

  reset() {
    this.breadcrumbStore.set([]);
  }
}
