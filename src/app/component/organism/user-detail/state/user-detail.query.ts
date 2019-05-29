import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserDetail } from './user-detail.model';
import { UserDetailState, UserDetailStore } from './user-detail.store';

@Injectable({
  providedIn: 'root'
})
export class UserDetailQuery extends QueryEntity<UserDetailState, UserDetail> {

  constructor(protected store: UserDetailStore) {
    super(store);
  }

}
