import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PostList } from '../component/organism/post-list/state/post-list.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(params?: { [key: string]: any }): Observable<PostList[]> {
    return this.http.get<PostList[]>(`${this.baseURL}/posts`, { params });
  }

  getPost(id: number): Observable<PostList> {
    return this.http.get<PostList>(`${this.baseURL}/posts/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(delay(1000));
  }
}
