'use strict';

angular.module('pixformanceHomeworkApp', [
  'ngRoute',
  'ui.bootstrap'
])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);
