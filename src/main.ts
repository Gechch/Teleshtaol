
import {enableProdMode, OnInit} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


import { environment } from './environments/environment';
import {HttpService} from "./app/http.service";
import {ContentComponent} from "./app/content/content.component";
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
