'use strict';	

angular.module('tmtControllers').
controller('HomeController', 
  function ($scope, $log, socket) {

    var wsKey = 'home';
    $scope.today = {
      passrate: 0,
      executed: 0,
      max: 1,
      failures: {
        individual: {
          count: 10,
          max: 40
        }
      }
    }
    $scope.now = {
      jenkins: {
        master: {
          alive: 1
        },
        slaves: {
          count: 50,
          active: 50
        }
      },
      racks: {
        count: 6,
        active: 4
      },
      duts: {
        count: 50,
        active: 2
      } 
    }
    $log.info('connecting to ws..');
    
    socket.forward('home', $scope);
    socket.forward('home.today', $scope);
    $scope.$on('socket:broadcast', function(event, data) {
      $log.debug('got a message', event.name);
    });

    $scope.$on('socket:error', function (ev, data) {
      $log.error('ws error');
    });
    $scope.$on('socket:home', function (ev, data) {
      $log.debug('server -> client: '+data);
    });
    $scope.$on('socket:home.today', function (ev, data) {
      $log.debug('server -> client: '+data);
      $scope.today = data;
    });
  });