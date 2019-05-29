import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../organism/modal/state/modal.service';
import { PostList } from '../../organism/post-list/state/post-list.model';
import { PostListQuery } from '../../organism/post-list/state/post-list.query';
import { PostListService } from '../../organism/post-list/state/post-list.service';
import { UserDetailService } from '../../organism/user-detail/state/user-detail.service';
import { UserDetailComponent } from '../../organism/user-detail/user-detail.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id: number;
  posts$: Observable<PostList[]>;

  constructor(
    private postListService: PostListService,
    private postListQuery: PostListQuery,
    private modalService: ModalService,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit() {
    this.id = Number(location.pathname.split('/')[2]);
    this.posts$ = this.postListQuery.selectAll();
    this.postListService.getPost(this.id);
  }

  ngOnDestroy() {
    this.postListService.reset();
  }

  switchModalFlag(userId: number) {
    this.userDetailService.get(userId);
    this.modalService.open(UserDetailComponent);
    this.modalService.switchLoadingFlag(true);
  }
}
