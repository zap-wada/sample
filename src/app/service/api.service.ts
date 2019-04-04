import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostList } from '../component/organism/post-list/state/post-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(params?: { [key: string]: any }): Observable<PostList[]> {
    return this.http.get<PostList[]>(
      'https://jsonplaceholder.typicode.com/posts',
      { params }
    );
  }

  getPost(id: number): Observable<PostList> {
    return this.http.get<PostList>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
