import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { PostService } from 'src/app/state/post/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { PostQuery } from 'src/app/state/post/post.query';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id: number;
  posts$: Observable<Post[]>;

  constructor(private postService: PostService, private postQuery: PostQuery) {}

  ngOnInit() {
    this.id = Number(location.pathname.split('/')[2]);
    this.posts$ = this.postQuery.posts$;
    this.postService.getPost(this.id);
  }

  ngOnDestroy() {
    this.postService.reset();
  }
}
