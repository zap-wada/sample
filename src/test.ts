// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { akitaConfig } from '@datorama/akita';
import 'zone.js/dist/zone-testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /^(?!.*\.component\.spec\.ts$)(?=.*\.spec\.ts$)/);
// And load the modules.
context.keys().map(context);

akitaConfig({
  resettable: true
});
