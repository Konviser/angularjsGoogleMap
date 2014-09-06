'use strict';

angular.module('pixformanceHomeworkApp')
  .factory('callGoogleMap', ['$http', '$rootScope', function($http, $rootScope){

    var callAPI = function(val){
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json',{
        params: {
          address: val,
          sensor: false,
          language: $rootScope.language
        }
      }).then(function(res){
        var addresses = [];
          angular.forEach(res.data.results, function(item){
              addresses.push(item.formatted_address);
          });
        return addresses;
      });
    };

    return {
      getLocations: callAPI
    }

}]);
