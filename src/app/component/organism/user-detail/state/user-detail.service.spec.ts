import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserDetailService } from './user-detail.service';
import { UserDetailStore } from './user-detail.store';

describe('UserDetailService', () => {
  let userDetailService: UserDetailService;
  let userDetailStore: UserDetailStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailService, UserDetailStore],
      imports: [HttpClientTestingModule]
    });

    userDetailService = TestBed.get(UserDetailService);
    userDetailStore = TestBed.get(UserDetailStore);
  });

  it('should be created', () => {
    expect(userDetailService).toBeDefined();
  });
});
