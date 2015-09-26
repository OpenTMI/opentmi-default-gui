'use strict';

/* Controllers */

angular.module('tmtControllers', ['ngStorage'])

  .controller('defaultController', 
    ['$scope', '$localStorage',
    function($scope, $localStorage, $sessionStorage) {
    
    //$log.info('Init defaultController');
    $scope.$storage = $localStorage.$default(
        {counter: 'hello'}
    );
    console.log($scope.$storage)
    $scope.$storage.counter = 3;
    
    $scope.keypressCallback = function ($event) {
      alert('Voila!');
      $event.preventDefault();
    };
  }]);