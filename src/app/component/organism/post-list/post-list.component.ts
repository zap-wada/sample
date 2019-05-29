import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { PostQuery } from 'src/app/state/post/post.query';
import { PostService } from 'src/app/state/post/post.service';
import { UserService } from 'src/app/state/user/user.service';
import { ModalService } from '../modal/state/modal.service';
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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.postService.get();
    this.posts$ = this.postQuery.posts$;
  }

  switchModalFlag(userId: number) {
    this.userService.reset();
    this.userService.get(userId);
    this.modalService.open(UserDetailComponent);
    this.modalService.switchLoadingFlag(true);
  }
}
