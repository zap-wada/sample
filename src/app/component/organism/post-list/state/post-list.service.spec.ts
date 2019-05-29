import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostListService } from './post-list.service';
import { PostListStore } from './post-list.store';

describe('PostListService', () => {
  let postListService: PostListService;
  let postListStore: PostListStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostListService, PostListStore],
      imports: [ HttpClientTestingModule ]
    });

    postListService = TestBed.get(PostListService);
    postListStore = TestBed.get(PostListStore);
  });

  it('should be created', () => {
    expect(postListService).toBeDefined();
  });

});
