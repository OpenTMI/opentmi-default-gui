'use strict';

angular.module('tmtControllers')
  .controller('accountController', 
             ['$scope', 'Account', '$stateParams', '$log', 
    function ($scope,   Account,   $stateParams,    $log) {
  
    $log.info('init accountController')
    
    $scope.accounts = Account.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);