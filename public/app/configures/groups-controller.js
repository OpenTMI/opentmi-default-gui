'use strict';

angular.module('OpenTMIControllers')
  .controller('GroupsController', 
             ['$scope', 'Groups', '$stateParams', '$log', 
    function ($scope,   Groups,   $stateParams,    $log) {
  
    $log.info('init GroupsController')

    $scope.message = 'List of user groups'
    
    $scope.groups = Groups.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);