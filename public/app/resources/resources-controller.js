'use strict';

angular.module('tmtControllers')
  .controller('ResourcesController', 
             ['$scope', 'Resource', '$stateParams', '$log', 
    function ($scope,   Resource,   $stateParams,    $log) {
  
    $log.info('init ResourcesController')
    
    $scope.resources = Resource.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);