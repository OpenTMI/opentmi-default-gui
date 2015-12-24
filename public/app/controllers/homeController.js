'use strict';	

angular
.module('OpenTMIControllers')
.controller('HomeController', 
  function ($scope, $log, socket, noty) {

    var wsKey = 'home';
    $scope.today = {
      passrate: 0,
      executed: 0,
      max: 100,
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
      },
      github: {
        public_repos: 0,
        private_repos: 0,
        total_repos: 500,
        disk_usage: 0
      }
    }

    
    
    socket.forward('home', $scope);
    socket.forward('home.today', $scope);
    socket.forward('home.now', $scope);
    socket.forward('home.github', $scope);
    
    $scope.$on('socket:broadcast', function(event, data) {
      $log.debug('got a message', event.name);
    });    
    $scope.$on('socket:home', function (ev, data) {
      $log.debug('socket:home: server -> client: '+data);
    });
    $scope.$on('socket:home.today', function (ev, data) {
      $log.debug('socket:home.today: server -> client: '+JSON.stringify(data));
      _.extend($scope.today, data);
    });
    $scope.$on('socket:home.now', function (ev, data) {
      $log.debug('socket:home.now: server -> client: '+JSON.stringify(data));
      _.extend($scope.now, data);
    });

  });