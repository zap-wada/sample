import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Breadcrumb, createBreadcrumb } from '../../organism/breadcrumb/state/breadcrumb.model';
import { BreadcrumbService } from '../../organism/breadcrumb/state/breadcrumb.service';
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
  breadcrumbs: Breadcrumb[] = [createBreadcrumb({ title: 'TOP', links: ['/'] }), createBreadcrumb({ title: 'Post' })];

  constructor(
    private postListService: PostListService,
    private postListQuery: PostListQuery,
    private modalService: ModalService,
    private userDetailService: UserDetailService,
    private routerQuery: RouterQuery,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.id = this.routerQuery.getSnapshot().state.root.params.post_id || 1;
    this.posts$ = this.postListQuery.posts$.pipe(
      tap(posts => this.breadcrumbService.set(this.breadcrumbs.concat(posts.map(post => createBreadcrumb({ title: post.title })))))
    );
    this.postListService.getPostByPostId(this.id);
    this.breadcrumbService.set(this.breadcrumbs);
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
