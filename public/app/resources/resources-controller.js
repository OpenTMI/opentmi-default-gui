'use strict';

angular.module('tmtControllers')
  .controller('resourcesController', 
             ['$scope', 'Resource', '$stateParams', '$log', 
    function ($scope,   Resource,   $stateParams,    $log) {
  
    $log.info('init resourcesController')
    
    $scope.resources = Resource.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);