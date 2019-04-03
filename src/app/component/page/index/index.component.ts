import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(private query: IndexQuery) {}

  ngOnInit() {
    this.store$ = this.query.store$;
  }

  changeFilter(id: number | null) {
    console.log(id);
  }
}
