import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { PostService } from 'src/app/state/post/post.service';
import { PostQuery } from 'src/app/state/post/post.query';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService, private postQuery: PostQuery) {}

  ngOnInit() {
    this.postService.get();
    this.posts$ = this.postQuery.posts$;
  }
}
