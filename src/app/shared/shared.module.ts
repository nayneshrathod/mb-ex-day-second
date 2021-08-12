import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AllmaterialdataModule } from '../allmaterial.module';
import { RouterModule } from '@angular/router';
import { CustomdirectiveDirective } from './customdirective.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CustomdirectiveDirective,
  ],
  imports: [CommonModule, AllmaterialdataModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CustomdirectiveDirective,
  ],
})
export class SharedModule {}
