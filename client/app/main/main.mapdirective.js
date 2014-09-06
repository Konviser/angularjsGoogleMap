'use strict';

angular.module('pixformanceHomeworkApp')
  .directive('mapDir', ['$timeout', function ($timeout) {

    return {
      restrict: 'A',
      link: function(scope,el, attrs){

        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(52.0000, 9.0000),
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
