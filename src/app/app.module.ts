import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDefaultModule } from './layout/default.module';
 
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  
    MyDefaultModule, 
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    

    
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
