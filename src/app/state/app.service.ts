import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStore } from './app.store';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private appStore: AppStore, private http: HttpClient) {}
}
