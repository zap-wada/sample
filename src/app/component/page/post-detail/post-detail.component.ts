import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { PostQuery } from 'src/app/state/post/post.query';
import { PostService } from 'src/app/state/post/post.service';
import { UserService } from 'src/app/state/user/user.service';
import { ModalService } from '../../organism/modal/state/modal.service';
import { UserDetailComponent } from '../../organism/user-detail/user-detail.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id: number;
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private postQuery: PostQuery,
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.id = Number(location.pathname.split('/')[2]);
    this.posts$ = this.postQuery.posts$;
    this.postService.getPost(this.id);
  }

  ngOnDestroy() {
    this.postService.reset();
  }

  switchModalFlag(userId: number) {
    this.userService.reset();
    this.userService.get(userId);
    this.modalService.open(UserDetailComponent);
    this.modalService.switchLoadingFlag(true);
  }
}
