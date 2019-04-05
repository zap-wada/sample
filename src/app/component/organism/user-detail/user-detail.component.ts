import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { UserQuery } from 'src/app/state/user/user.query';
import { Observable } from 'rxjs';
import { User } from 'src/app/state/user/user.model';
import { UserService } from 'src/app/state/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userStore$: Observable<User[]>;

  constructor(private userService: UserService, private userQuery: UserQuery) {}

  ngOnInit() {
    this.userStore$ = this.userQuery.selectAll();
  }

  ngOnDestroy() {
    this.userService.reset();
  }
}
