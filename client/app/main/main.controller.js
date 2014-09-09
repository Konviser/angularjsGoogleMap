'use strict';

angular.module('angularjsGoogleMaps')
  .controller('MainCtrl', ['$scope', '$http', 'callGoogleMap', function ($scope, $http, callGoogleMap) {

      $scope.getAddress = callGoogleMap.getLocations;

      $scope.onAddressSelect = function($item,$model,$value){
        $scope.$broadcast('addressSelected',$item);
      };

  }]);
