import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/page/index/index.component';
import { PostDetailComponent } from './component/page/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'post',
    children: [{ path: ':post_id', component: PostDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
