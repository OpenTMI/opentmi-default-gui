'use strict';	

angular.module('tmtControllers').
controller('HomeController', 
  function ($scope, $log, socket) {

    var wsKey = 'home';
    $scope.today = {
      passrate: 0,
      executed: 0,
      failures: {
        individual: {
          count: 10,
          max: 40
        }
      }
    }
    $scope.github = {
      public_repos: 0,
      private_repos: 0,
      total_repos: 500,
      disk_usage: 0
    }
    $scope.now = {
      jenkins: {
        master: {
          alive: 1
        },
        slaves: {
          count: 50,
          active: 50
        },
        jobs: {
          active: 0,
          count: 100
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
    socket.forward('home.now', $scope);
    socket.forward('home.github', $scope);
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
      $log.debug('server -> client: '+JSON.stringify(data));
      _.extend($scope.today, data);
    });
    $scope.$on('socket:home.now', function (ev, data) {
      $log.debug('server -> client: '+JSON.stringify(data));
      _.extend($scope.now, data);
    });
    $scope.$on('socket:home.github', function (ev, data) {
      $log.debug('server -> client: '+JSON.stringify(data));
      _.extend($scope.github, data);
    });

  });