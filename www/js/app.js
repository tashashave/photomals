(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {

  });


    
    
module.controller('CaptureController', function($scope, $data) {
//    onAppStart Camera on
  });
    
 module.controller('LocationController', function($scope, $data) {
//   City selection pull catch list information from database 
  });
    
 module.controller('CatchController', function($scope, $data) {
     $scope.items = $data.items;
//  display icons
     //change icon to color version when captured
     //score display
        //add capture complete icons
  });



    
    // Data

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              name: 'deer',
              points: '50',
              geofence: '',
              province: '',
              url: ''
          },
          {
              name: 'raccoon',
              points: '',
              geofence: '',
              province: '',
              url: ''
          },
          {
              name: 'skunk',
              points: '',
              geofence: '',
              province: '',
              url: ''
          },
          {
              name: 'nuthatch',
              points: '',
              geofence: '',
              province: '',
              url: ''
          },
    
      ];

      return data;
  });
})();

