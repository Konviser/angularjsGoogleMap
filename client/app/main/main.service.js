'use strict';

angular.module('pixformanceHomeworkApp')
  .factory('googleMapModel', function(){

    var googleMapModel = function(){

        this.init =  function(lat,long,zoom) {
          var mapOptions = {
              zoom: typeof zoom !== 'undefined' ? zoom : 7,
              lat: typeof lat !== 'undefined' ? lat : 52.00000,
              long: typeof long !== 'undefined' ? long : 10.0000,
              mapTypeId: google.maps.MapTypeId.TERRAIN
          };
          return new google.maps.Map(document.getElementById('map'), mapOptions);
        };

        this.getInfoWindow = function(){
          return new google.maps.InfoWindow();
        }
    };
    return new googleMapModel();

});
