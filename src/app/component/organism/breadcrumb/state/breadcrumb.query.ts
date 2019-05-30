import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbState, BreadcrumbStore } from './breadcrumb.store';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbQuery extends QueryEntity<BreadcrumbState, Breadcrumb> {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(protected store: BreadcrumbStore) {
    super(store);
    this.breadcrumbs$ = this.selectAll();
  }
}
