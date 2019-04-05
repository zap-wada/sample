import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../state/post/post.model';
import { User } from '../state/user/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(params?: { [key: string]: any }): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/posts`, { params });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseURL}/posts/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(delay(1000));
  }
}
