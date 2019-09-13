import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA], //ADD CUSTOM_ELEMENTS_SCHEMA to allow usage of Non-Angular elements named with dash case
  bootstrap: [AppComponent]
})
export class AppModule { }
