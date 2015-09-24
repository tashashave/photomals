(function(){
  'use strict';
  var module = angular.module('app', ['onsen', 'service']);

  module.controller('AppController', function($scope, $data) {

  });


    
    
module.controller('CaptureController', function($scope, $data) {
//    onAppStart Camera on
  });
    
 module.controller('InfoController', function($scope, $data) {
//   City selection pull catch list information from database 
  });
    
 module.controller('CatchController', function($scope, $data, ParseService) {
     $scope.items = $data.items;
     
        $scope.showDetail = function(index) {
            console.log('hello');
          var item = $scope.items[index];
          $data.selectedItem = item;
          $scope.mynavigator.pushPage('detail.html');
        };
     
     ParseService.getAnimals(function(results) {
          $scope.$apply(function() {
            $scope.items = results;
              console.log(results);
          });
        });
     
//  display icons
     //change icon to color version when captured
     //score display
        //add capture complete icons
  });
    
    module.controller('DetailController', function($scope, $data) {
        $scope.item = $data.selectedItem;
          
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
              url: 'http://www.art-fever.co.uk/canvas_images/cartoon%20animals%2010%20white.jpg'
          },
          {
              name: 'raccoon',
              points: '20',
              geofence: '',
              province: '',
              url: 'http://ecx.images-amazon.com/images/I/418vbbULh0L._SY300_.jpg'
          },
          {
              name: 'skunk',
              points: '20',
              geofence: '',
              province: '',
              url: 'http://www.wikihow.com/images/6/6d/Color-Step-6-40.jpg'
          },
          {
              name: 'crow',
              points: '5',
              geofence: '',
              province: '',
              url: 'http://cdn.graphicsfactory.com/clip-art/image_files/image/8/1408888-cartoon_Crow_1.jpg'
          },
          
          {
              name: 'rat',
              points: '5',
              geofence: '',
              province: '',
              url: 'http://previews.123rf.com/images/shock77/shock770906/shock77090600012/5002029-funny-cartoon-mouse-Stock-Vector-rat.jpg'
          },
          
          {
              name: 'squirrel',
              points: '5',
              geofence: '',
              province: '',
              url: 'http://thumbs.dreamstime.com/z/cute-cartoon-squirrel-playful-mood-26085560.jpg'
          },
          
          {
              name: 'fox',
              points: '20',
              geofence: '',
              province: '',
              url: 'http://previews.123rf.com/images/tigatelu/tigatelu1404/tigatelu140400240/27656851-Cute-fox-cartoon-Stock-Vector-wolf.jpg'
          },
          
          {
              name: 'whale',
              points: '100',
              geofence: '',
              province: '',
              url: 'http://www.how-to-draw-cartoons-online.com/image-files/cartoon-whale.gif'
          },
          
          {
              name: 'seal',
              points: '40',
              geofence: '',
              province: '',
              url: 'http://i.istockimg.com/file_thumbview_approve/13454674/3/stock-illustration-13454674-seal-cartoon.jpg'
          },
          
          {
              name: 'rabbit',
              points: '15',
              geofence: '',
              province: '',
              url: 'http://previews.123rf.com/images/coffgirl/coffgirl1207/coffgirl120700005/14631460-Bunny-eating-a-carrot-Stock-Vector-rabbit-cartoon-bunny.jpg'
          },
          
          {
              name: 'coyote',
              points: '20',
              geofence: '',
              province: '',
              url: 'http://thumb10.shutterstock.com/display_pic_with_logo/1200539/152965277/stock-vector-cartoon-coyote-wild-dog-152965277.jpg'
          },
          
          {
              name: 'frog',
              points: '10',
              geofence: '',
              province: '',
              url: 'http://images.clipartpanda.com/cartoon-jumping-frog-niBGkoMiA.jpeg'
          },
          
          {
              name: 'eagle',
              points: '20',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'bear',
              points: '60',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'beaver',
              points: '20',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'porcupine',
              points: '20',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'mountain goat',
              points: '30',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'gopher',
              points: '10',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'wolf',
              points: '50',
              geofence: '',
              province: '',
              url: ''
          },
          
          {
              name: 'cougar',
              points: '60',
              geofence: '',
              province: '',
              url: ''
          },
    
      ];

      return data;
  });
})();

