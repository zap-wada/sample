import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { PostStore } from './post.store';

describe('PostService', () => {
  let postService: PostService;
  let postStore: PostStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService, PostStore],
      imports: [ HttpClientTestingModule ]
    });

    postService = TestBed.get(PostService);
    postStore = TestBed.get(PostStore);
  });

  it('should be created', () => {
    expect(postService).toBeDefined();
  });

});
