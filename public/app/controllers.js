'use strict';

/* Controllers */

angular.module('tmtControllers', ['ngStorage'])

  .controller('defaultController', ['$scope', '$localStorage',
    function($scope, $localStorage, $sessionStorage) {


    console.log('Hello, this is defaultController');
    $scope.$storage = $localStorage.$default({counter: 'hello'});

    $scope.$storage.counter = 2;
    
    $scope.keypressCallback = function ($event) {
      alert('Voila!');
      $event.preventDefault();
    };
  }]);