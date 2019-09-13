import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  //enableProdMode(); //can't have multiple enableProdMode calls when we are using elements, invoke once in the host app
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
