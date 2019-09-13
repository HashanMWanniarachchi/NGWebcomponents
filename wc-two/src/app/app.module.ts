import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

//import createcustomelement
//import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
  /*,
  entryComponents: [AppComponent] //we are not bootstrapping the custom element component
  */
})
export class AppModule {

  //get injector instance through DI
  /*constructor(private injector:Injector){

  }

  ngDoBootstrap(){
    const elm = createCustomElement(AppComponent, {injector: this.injector}); //create custom element with injector
    customElements.define('wc-two', elm); //register custom element
  }
  */

 }
