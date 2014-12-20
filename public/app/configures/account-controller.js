'use strict';

angular.module('tmtControllers')
  .controller('AccountController', 
             ['$scope', 'Account', '$stateParams', '$log', 
    function ($scope,   Account,   $stateParams,    $log) {
  
    $log.info('init AccountController')
    
    $scope.accounts = Account.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);