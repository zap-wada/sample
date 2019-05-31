import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { ModalStore } from './modal.store';

describe('ModalService', () => {
  let modalService: ModalService;
  let modalStore: ModalStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService, ModalStore],
      imports: [HttpClientTestingModule]
    });

    modalService = TestBed.get(ModalService);
    modalStore = TestBed.get(ModalStore);
  });

  it('should be created', () => {
    expect(modalService).toBeDefined();
  });

  describe('open', () => {});

  describe('close', () => {});

  describe('switchLoadingFlag', () => {
    it('should call with true', () => {
      const isLoading = true;
      const spy = spyOn(modalStore, 'setLoading');
      modalService.switchLoadingFlag(isLoading);
      expect(spy).toHaveBeenCalledWith(isLoading);
    });
  });

  describe('switchOpenedFlag', () => {
    it('should call with true', () => {
      const isOpened = true;
      const spy = spyOn(modalStore, 'update');
      modalService.switchOpenedFlag(isOpened);
      expect(spy).toHaveBeenCalledWith({ isOpened });
    });
  });
});
