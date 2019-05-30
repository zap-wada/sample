import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { UserDetail } from './user-detail.model';
import { UserDetailState, UserDetailStore } from './user-detail.store';

@Injectable({
  providedIn: 'root'
})
export class UserDetailQuery extends QueryEntity<UserDetailState, UserDetail> {
  users$: Observable<UserDetail[]>;

  constructor(protected store: UserDetailStore) {
    super(store);
    this.users$ = this.selectAll();
  }
}
