import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from './state/breadcrumb.model';
import { BreadcrumbQuery } from './state/breadcrumb.query';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {
  breads$: Observable<Breadcrumb[]>;

  constructor(private breadCrumbQuery: BreadcrumbQuery) {
    this.breads$ = this.breadCrumbQuery.breadcrumbs$;
  }

  ngOnInit() {}
}
