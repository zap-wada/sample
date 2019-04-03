import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Index } from '../component/page/index/state/index.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPost(params?: any): Observable<Index[]> {
    return this.http.get<Index[]>(
      'https://jsonplaceholder.typicode.com/posts',
      { params }
    );
  }
}
