import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexStore } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(private indexStore: IndexStore, private http: HttpClient) {}
}
