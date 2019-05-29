import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { PostQuery } from 'src/app/state/post/post.query';
import { PostService } from 'src/app/state/post/post.service';
import { ModalService } from '../modal/state/modal.service';
import { UserDetailService } from '../user-detail/state/user-detail.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private postQuery: PostQuery,
    private modalService: ModalService,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit() {
    this.postService.get();
    this.posts$ = this.postQuery.posts$;
  }

  switchModalFlag(userId: number) {
    this.userDetailService.get(userId);
    this.modalService.open(UserDetailComponent);
    this.modalService.switchLoadingFlag(true);
  }
}
