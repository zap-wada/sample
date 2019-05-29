import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { User } from './user.model';
import { UserState, UserStore } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<UserState, User> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
