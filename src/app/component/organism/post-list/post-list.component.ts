import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../modal/state/modal.service';
import { UserDetailService } from '../user-detail/state/user-detail.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { PostList } from './state/post-list.model';
import { PostListQuery } from './state/post-list.query';
import { PostListService } from './state/post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<PostList[]>;

  constructor(
    private postListService: PostListService,
    private postListQuery: PostListQuery,
    private modalService: ModalService,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit() {
    this.postListService.getPostByUserId();
    this.posts$ = this.postListQuery.posts$;
  }

  switchModalFlag(userId: number) {
    this.userDetailService.get(userId);
    this.modalService.open(UserDetailComponent);
    this.modalService.switchLoadingFlag(true);
  }
}
