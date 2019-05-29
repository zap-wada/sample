import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ModalComponent } from './component/organism/modal/modal.component';
import { PostListComponent } from './component/organism/post-list/post-list.component';
import { UserDetailComponent } from './component/organism/user-detail/user-detail.component';
import { IndexComponent } from './component/page/index/index.component';
import { PostDetailComponent } from './component/page/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostListComponent,
    PostDetailComponent,
    ModalComponent,
    UserDetailComponent
  ],
  entryComponents: [UserDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production
      ? []
      : [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
