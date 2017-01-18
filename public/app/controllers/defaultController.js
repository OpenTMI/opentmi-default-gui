'use strict';

angular.module('OpenTMIControllers')
  .controller('defaultController', 
            ['$scope', '$localStorage', '$sessionStorage', '$log', 'socket', 'noty', 
    function($scope,    $localStorage,   $sessionStorage,   $log,   socket,   noty ) {
    
    $log.info('Init defaultController');
    
    $scope.noty = function(data){
      console.log(data);
      noty.noty({ 
          text: data.text,
          type: data.type || "success",
          timeout: data.timeout || 2000,
          maxVisible: data.maxVisible || 5,
          layout: data.layout || 'bottom'
      });
    }

    $log.info('connecting to ws..');

    socket.forward('connect', $scope);
    socket.forward('disconnect', $scope);
    socket.forward('notify', $scope);
    $scope.$on('socket:connect', function (ev, data) {
        $log.info('connected');
        $scope.noty({
        text: 'OpenTMI connected'
      });
    });
    $scope.$on('socket:disconnect', function (ev, data) {
      $log.info('disconnected');
      $scope.noty({
        text: 'OpenTMI disconnected',
        type: 'error'
      });
    });
    
    $scope.$on('socket:notify', function (ev, data) {
        $scope.noty(data);   
    });


    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
    /*
    $scope.$storage = $localStorage.$default(
        {counter: 0}
    );
    $log.debug($scope.$storage)
    
    $scope.keypressCallback = function ($event) {
      alert('Voila!');
      $event.preventDefault();
    };
    */
  }]);