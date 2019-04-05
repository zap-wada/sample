import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs';
import { IndexQuery } from './state/index.query';
import { IndexState } from './state/index.store';
import { PostService } from 'src/app/state/post/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {
  store$: Observable<IndexState>;

  constructor(private query: IndexQuery, private postService: PostService) {}

  ngOnInit() {
    this.store$ = this.query.store$;
  }

  ngOnDestroy() {
    this.postService.reset();
  }

  changeFilter(id: number | null) {
    this.postService.reset();
    this.postService.get(id);
  }
}
