import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Breadcrumb, createBreadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbStore } from './breadcrumb.store';

describe('BreadcrumbService', () => {
  let breadcrumbService: BreadcrumbService;
  let breadcrumbStore: BreadcrumbStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbService, BreadcrumbStore],
      imports: [HttpClientTestingModule]
    });

    breadcrumbService = TestBed.get(BreadcrumbService);
    breadcrumbStore = TestBed.get(BreadcrumbStore);
  });

  it('should be created', () => {
    expect(breadcrumbService).toBeDefined();
  });

  describe('set', () => {
    it('should return dummy value from spy', () => {
      const spy = spyOn(breadcrumbStore, 'set');
      const dummyBreadcrumb = createBreadcrumb({ title: 'test' });
      breadcrumbService.set([dummyBreadcrumb]);
      expect(spy).toHaveBeenCalledWith([dummyBreadcrumb]);
    });
  });

  describe('reset', () => {
    it('should return empty array from spy', () => {
      const spy = spyOn(breadcrumbStore, 'set');
      breadcrumbService.reset();
      expect(spy).toHaveBeenCalledWith([]);
    });
  });
});
