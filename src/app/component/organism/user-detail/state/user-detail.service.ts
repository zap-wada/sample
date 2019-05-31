import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { UserDetailStore } from './user-detail.store';

@Injectable({ providedIn: 'root' })
export class UserDetailService {
  constructor(private userDetailStore: UserDetailStore, private apiService: ApiService) {}

  get(userId: number) {
    this.reset();
    this.apiService.getUser(userId).subscribe(content => {
      this.userDetailStore.set([content]);
    });
  }

  reset() {
    this.userDetailStore.reset();
  }
}
