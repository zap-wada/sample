import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { ModalState } from './state/modal.store';
import { ModalQuery } from './state/modal.query';
import { ModalService } from './state/modal.service';
import { UserQuery } from 'src/app/state/user/user.query';
import { UserState } from 'src/app/state/user/user.store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef }) vcr;

  store$: Observable<ModalState>;
  userStore$: Observable<UserState>;

  constructor(
    private service: ModalService,
    private query: ModalQuery,
    private userQuery: UserQuery
  ) {}

  ngOnInit() {
    this.store$ = this.query.store$;
    this.userStore$ = this.userQuery.selectAll();
  }

  ngAfterViewInit() {
    this.service.vcr = this.vcr;
  }

  close() {
    this.service.close();
  }
}
