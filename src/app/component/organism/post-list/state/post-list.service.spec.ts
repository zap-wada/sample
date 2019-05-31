import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { PostListService } from './post-list.service';
import { PostListStore } from './post-list.store';

describe('PostListService', () => {
  let postListService: PostListService;
  let postListStore: PostListStore;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostListService, PostListStore, ApiService],
      imports: [HttpClientTestingModule]
    });

    postListService = TestBed.get(PostListService);
    postListStore = TestBed.get(PostListStore);
    apiService = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(postListService).toBeDefined();
  });

  describe('getPostByUserId', () => {
    it('when userId is defined, should store set method call with dummy post', () => {
      const userId = 1;
      const post = { id: 1 };
      const apiSpy = spyOn(apiService, 'getPosts').and.returnValue(of([post]));
      const storeSpy = spyOn(postListStore, 'set');
      postListService.getPostByUserId(userId);
      expect(apiSpy).toHaveBeenCalledWith({ userId });
      expect(storeSpy).toHaveBeenCalledWith([post]);
    });

    it('when userId is undefined, should store set method call with dummy post', () => {
      const post = { id: 1 };
      const apiSpy = spyOn(apiService, 'getPosts').and.returnValue(of([post]));
      const storeSpy = spyOn(postListStore, 'set');
      postListService.getPostByUserId();
      expect(apiSpy).toHaveBeenCalledWith(undefined);
      expect(storeSpy).toHaveBeenCalledWith([post]);
    });
  });

  describe('getPost', () => {
    it('should store set method call with dummy post', () => {
      const postId = 1;
      const post = { id: 1 };
      const apiSpy = spyOn(apiService, 'getPost').and.returnValue(of(post));
      const storeSpy = spyOn(postListStore, 'set');
      postListService.getPostByPostId(postId);
      expect(apiSpy).toHaveBeenCalledWith(postId);
      expect(storeSpy).toHaveBeenCalledWith([post]);
    });
  });

  describe('reset', () => {
    it('should call store reset method', () => {
      const spy = spyOn(postListStore, 'reset');
      postListService.reset();
      expect(spy).toHaveBeenCalled();
    });
  });
});
