import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { ModalService } from '../modal/state/modal.service';
import { UserDetailQuery } from './state/user-detail.query';
import { UserDetailService } from './state/user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit, OnDestroy {
  store$: Observable<User[]>;

  constructor(private userDetailService: UserDetailService, private userDetailQuery: UserDetailQuery, private modalService: ModalService) {}

  ngOnInit() {
    this.store$ = this.userDetailQuery.selectAll().pipe(
      filter(contents => contents.length > 0),
      tap(() => this.modalService.switchLoadingFlag(false))
    );
  }

  ngOnDestroy() {
    this.userDetailService.reset();
  }
}
