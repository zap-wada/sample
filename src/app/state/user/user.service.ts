import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { UserStore } from './user.store';
import { User } from './user.model';
import { ApiService } from 'src/app/service/api.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private api: ApiService) {}

  get() {
    this.api.getUser(1).subscribe(content => this.userStore.set([content]));
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
}
