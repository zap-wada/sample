import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { akitaConfig } from '@datorama/akita';
import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { UserDetailService } from './user-detail.service';
import { UserDetailStore } from './user-detail.store';

describe('UserDetailService', () => {
  let userDetailService: UserDetailService;
  let userDetailStore: UserDetailStore;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailService, UserDetailStore],
      imports: [HttpClientTestingModule]
    });

    userDetailService = TestBed.get(UserDetailService);
    userDetailStore = TestBed.get(UserDetailStore);
    apiService = TestBed.get(ApiService);

    akitaConfig({
      resettable: true
    });
  });

  it('should be created', () => {
    expect(userDetailService).toBeDefined();
  });

  describe('get', () => {
    it('should call with dummy user value', () => {
      const id = 1;
      const user = {};
      const resetSpy = spyOn(userDetailStore, 'reset');
      const setSpy = spyOn(userDetailStore, 'set');
      const apiSpy = spyOn(apiService, 'getUser').and.returnValue(of(user));
      userDetailService.get(id);
      expect(resetSpy).toHaveBeenCalled();
      expect(apiSpy).toHaveBeenCalledWith(id);
      expect(setSpy).toHaveBeenCalledWith([user]);
    });
  });

  describe('reset', () => {
    it('should call store reset method', () => {
      const spy = spyOn(userDetailStore, 'reset');
      userDetailService.reset();
      expect(spy).toHaveBeenCalled();
    });
  });
});
