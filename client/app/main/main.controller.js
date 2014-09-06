'use strict';

angular.module('pixformanceHomeworkApp')
  .controller('MainCtrl', ['$scope', '$http', 'callGoogleMap', function ($scope, $http, callGoogleMap) {

      $scope.getAddress = callGoogleMap.getLocations;


  }]);
