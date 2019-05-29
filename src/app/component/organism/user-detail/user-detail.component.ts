import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { User } from 'src/app/state/user/user.model';
import { UserQuery } from 'src/app/state/user/user.query';
import { UserService } from 'src/app/state/user/user.service';
import { ModalService } from '../modal/state/modal.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit, OnDestroy {
  store$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private userQuery: UserQuery,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.store$ = this.userQuery.selectAll().pipe(
      filter(contents => contents.length > 0),
      tap(() => this.modalService.switchLoadingFlag(false))
    );
  }

  ngOnDestroy() {
    this.userService.reset();
  }
}
