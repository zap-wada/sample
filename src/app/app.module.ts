import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { IndexComponent } from './component/page/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './component/organism/post-list/post-list.component';
import { PostDetailComponent } from './component/page/post-detail/post-detail.component';
import { ModalComponent } from './component/organism/modal/modal.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, PostListComponent, PostDetailComponent, ModalComponent],
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
