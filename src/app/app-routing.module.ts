import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/page/index/index.component';
import { PostDetailComponent } from './component/page/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'post', children: [{ path: ':id', component: PostDetailComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
