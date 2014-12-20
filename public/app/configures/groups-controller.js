'use strict';

angular.module('tmtControllers')
  .controller('groupsController', 
             ['$scope', 'Groups', '$stateParams', '$log', 
    function ($scope,   Groups,   $stateParams,    $log) {
  
    $log.info('init groupsController')

    $scope.message = 'List of user groups'
    
    $scope.groups = Groups.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);