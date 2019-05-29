import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { ModalQuery } from './state/modal.query';
import { ModalService } from './state/modal.service';
import { ModalState } from './state/modal.store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef }) vcr;

  store$: Observable<ModalState>;

  constructor(private service: ModalService, private query: ModalQuery) {}

  ngOnInit() {
    this.store$ = this.query.select();
  }

  ngAfterViewInit() {
    this.service.vcr = this.vcr;
  }

  close() {
    this.service.close();
  }
}
