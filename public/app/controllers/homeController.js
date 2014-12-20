'use strict';	

angular.module('tmtControllers').
controller('HomeController', 
  function ($scope, $log, socket) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];

    
    $log.info('connecting to ws..');
    
    socket.forward('test', $scope);
    $scope.$on('socket:broadcast', function(event, data) {
      $log.debug('got a message', event.name);
    });

    $scope.$on('socket:error', function (ev, data) {
      $log.error('ws error');
    });
    $scope.$on('socket:test', function (ev, data) {
      $log.debug(data);
    });
    
    $scope.addSlide = function(url, text) {
      slides.push({
        image: url, text: text
      });
    };
    
    $scope.addSlide('#', 'Current status');
    $scope.addSlide('#', 'Active execution');
    $scope.addSlide('#', 'This week');
    $scope.addSlide('#', 'This month');
  });