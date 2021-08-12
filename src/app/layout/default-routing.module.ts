import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../accounts/auth/auth.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { ForDirectiveComponent } from '../modules/for-directive/for-directive.component';
import { PostsComponent } from '../modules/posts/posts.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'articale',
    component: AuthComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
   
  },
  {
    path: 'forloop',
    component: ForDirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingRoutingModule {}
