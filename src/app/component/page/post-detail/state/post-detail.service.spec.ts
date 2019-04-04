import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostDetailService } from './post-detail.service';
import { PostDetailStore } from './post-detail.store';

describe('PostDetailService', () => {
  let postDetailService: PostDetailService;
  let postDetailStore: PostDetailStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDetailService, PostDetailStore],
      imports: [ HttpClientTestingModule ]
    });

    postDetailService = TestBed.get(PostDetailService);
    postDetailStore = TestBed.get(PostDetailStore);
  });

  it('should be created', () => {
    expect(postDetailService).toBeDefined();
  });

});
