import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllmaterialdataModule } from 'src/app/allmaterial.module';
import { AuthModule } from 'src/app/accounts/auth.module';
import { ContactComponent } from '../modules/contact/contact.component';
import { AboutComponent } from '../modules/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForDirectiveComponent } from '../modules/for-directive/for-directive.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ContactComponent,
    AboutComponent,
    ForDirectiveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AllmaterialdataModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MyDefaultModule {}
