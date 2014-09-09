'use strict';

angular.module('angularjsGoogleMaps')
  .directive('mapDir', ['$timeout', function ($timeout) {

    return {
      restrict: 'E',
      scope: {},
      link: function(scope,el, attrs){

        scope.markers = [];
        var infoWindow;

        $timeout(function(){
          var lat = (typeof attrs.lat === 'undefined')? 52.0000: parseInt(attrs.lat, 10);
          var long = (typeof attrs.long === 'undefined')? 9.0000: parseInt(attrs.long, 10)
          var mapOptions = {
              zoom: (typeof attrs.zoom === 'undefined')? 7: parseInt(attrs.zoom, 10),
              center: new google.maps.LatLng(lat, long),
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
          infoWindow = new google.maps.InfoWindow();

          google.maps.event.addDomListener(window, "resize", function() {
            var center = scope.map.getCenter();
            google.maps.event.trigger(scope.map, "resize");
            scope.map.setCenter(center);
          });
        });

        scope.$on('addressSelected', function (event,details){
          var marker = new google.maps.Marker({
              position: details.location,
              map: scope.map,
              title: details.address,
          });

          scope.map.setZoom(17);
          scope.map.panTo(marker.position);
          scope.markers.push(marker);

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent(marker.title);
            infoWindow.open(scope.map, marker);
            scope.map.setCenter(marker.getPosition());
          });
      });
    },

      template: '<div id="map"></div>'
    }

  }]);
