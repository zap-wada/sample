import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ApiService } from 'src/app/service/api.service';
import { User } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private api: ApiService) {}

  get(userId: number) {
    this.api.getUser(userId).subscribe(content => {
      this.userStore.set([content]);
    });
  }

  add(user: User) {
    this.userStore.add(user);
  }

  update(id, user: Partial<User>) {
    this.userStore.update(id, user);
  }

  remove(id: ID) {
    this.userStore.remove(id);
  }

  reset() {
    this.userStore.set([]);
  }
}
