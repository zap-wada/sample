import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { UserStore } from './user.store';

describe('UserService', () => {
  let userService: UserService;
  let userStore: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, UserStore],
      imports: [ HttpClientTestingModule ]
    });

    userService = TestBed.get(UserService);
    userStore = TestBed.get(UserStore);
  });

  it('should be created', () => {
    expect(userService).toBeDefined();
  });

});
