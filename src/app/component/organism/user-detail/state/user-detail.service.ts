import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { UserDetail } from './user-detail.model';
import { UserDetailStore } from './user-detail.store';

@Injectable({ providedIn: 'root' })
export class UserDetailService {
  constructor(private userDetailStore: UserDetailStore, private apiService: ApiService) {}

  get(userId: number) {
    this.apiService.getUser(userId).subscribe(content => {
      this.userDetailStore.set([content]);
    });
  }

  add(user: UserDetail) {
    this.userDetailStore.add(user);
  }

  update(id, user: Partial<UserDetail>) {
    this.userDetailStore.update(id, user);
  }

  remove(userId: number) {
    this.userDetailStore.remove(userId);
  }

  reset() {
    this.userDetailStore.set([]);
  }
}
