'use strict';

angular.module('pixformanceHomeworkApp')
  .directive('mapDir', ['$timeout', function ($timeout) {

    return {
      restrict: 'E',
      link: function(scope,el, attrs){

        var lat = (typeof attrs.lat === 'undefined')? 52.0000: parseInt(attrs.lat, 10);
        var long = (typeof attrs.long === 'undefined')? 9.0000: parseInt(attrs.long, 10)

        var mapOptions = {
            zoom: (typeof attrs.zoom === 'undefined')? 7: parseInt(attrs.zoom, 10),
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $timeout(function(){
          scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
          var infoWindow = new google.maps.InfoWindow();
        });
      },

      template: '<div id="map"></div>'
    }

  }]);
