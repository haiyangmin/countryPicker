import { enableProdMode } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';

import './app-js/app.angularjs.module';
import './app-js/sample/sample.module';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// Import these globally to bring in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';

if (environment.production) {
    enableProdMode();
}

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {
        // Use the upgrade module to bootstrap the hybrid
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.getElementById('MyApp'), ['sample']);
    })
    .catch(err => console.log(err));
