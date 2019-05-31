import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListService } from '../../organism/post-list/state/post-list.service';
import { IndexQuery } from './state/index.query';
import { IndexState } from './state/index.store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {
  store$: Observable<IndexState>;

  constructor(private query: IndexQuery, private postListService: PostListService) {}

  ngOnInit() {
    this.store$ = this.query.store$;
  }

  ngOnDestroy() {
    this.postListService.reset();
  }

  changeFilter(id: number | null) {
    this.postListService.reset();
    this.postListService.getPostByUserId(id);
  }
}
