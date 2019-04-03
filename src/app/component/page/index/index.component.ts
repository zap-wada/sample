import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IndexService } from './state/index.service';
import { Observable } from 'rxjs';
import { IndexQuery } from './state/index.query';
import { IndexState } from './state/index.store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  store$: Observable<IndexState>;
  posts$: Observable<any>;

  constructor(private service: IndexService, private query: IndexQuery) {}

  ngOnInit() {
    this.service.get();
    this.store$ = this.query.store$;
    this.posts$ = this.query.posts$;
  }

  changeFilter(id: number | null) {
    this.service.get(id);
  }
}
