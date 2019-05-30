import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { BreadcrumbService } from './component/organism/breadcrumb/state/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private routerQuery: RouterQuery, private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.routerQuery.select().subscribe(() => this.breadcrumbService.reset());
  }
}
