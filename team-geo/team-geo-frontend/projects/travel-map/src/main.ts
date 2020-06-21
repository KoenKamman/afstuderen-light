import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  try {
    enableProdMode();
  } catch {
    console.warn('Platform already set up, ignoring enableProdMode().');
  }
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZone: 'noop'
}).catch(err => console.error(err));
