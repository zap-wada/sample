import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListService } from './state/post-list.service';
import { PostListQuery } from './state/post-list.query';
import { PostList } from './state/post-list.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<PostList[]>;

  constructor(private service: PostListService, private query: PostListQuery) {}

  ngOnInit() {
    this.service.get();
    this.posts$ = this.query.posts$;
  }
}
