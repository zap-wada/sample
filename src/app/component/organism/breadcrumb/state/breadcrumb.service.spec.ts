import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
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
});
