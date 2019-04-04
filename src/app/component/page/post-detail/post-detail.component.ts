import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostDetailService } from './state/post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit {
  id: number;

  constructor(private service: PostDetailService) {}

  ngOnInit() {
    this.id = Number(location.pathname.split('/')[2]);
    this.service.get(this.id);
  }
}
