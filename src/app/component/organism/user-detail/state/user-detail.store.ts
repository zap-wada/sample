import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UserDetail } from './user-detail.model';

export interface UserDetailState extends EntityState<UserDetail> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-detail' })
export class UserDetailStore extends EntityStore<UserDetailState, UserDetail> {

  constructor() {
    super();
  }

}

