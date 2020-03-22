
// External dependencies
import * as angular from 'angular';

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export const sampleAppModuleAngularJS = angular.module('sample', [
    'MyApp',
]);
