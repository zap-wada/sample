import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserDetailStore, UserDetailState } from './user-detail.store';
import { UserDetail } from './user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailQuery extends QueryEntity<UserDetailState, UserDetail> {

  constructor(protected store: UserDetailStore) {
    super(store);
  }

}
