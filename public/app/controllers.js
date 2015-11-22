'use strict';

/* Controllers */

angular.module('tmtControllers', ['ngStorage'])

  .controller('defaultController', 
            ['$scope', '$localStorage', '$sessionStorage', '$log',
    function($scope,    $localStorage,   $sessionStorage,   $log ) {
    
    $log.info('Init defaultController');
    
    $scope.$storage = $localStorage.$default(
        {counter: 0}
    );
    $log.debug($scope.$storage)
    
    $scope.keypressCallback = function ($event) {
      alert('Voila!');
      $event.preventDefault();
    };
  }]);