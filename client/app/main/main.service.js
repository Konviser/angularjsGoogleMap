'use strict';

angular.module('angularjsGoogleMaps')
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
              addresses.push({
                address: item.formatted_address,
                location: item.geometry.location
              });
          });
        return addresses;
      });
    };

    return {
      getLocations: callAPI
    }

}]);
