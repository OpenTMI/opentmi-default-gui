'use strict';

angular.module('tmtControllers')
  .controller('addonsController', 
             ['$scope', 'Addon', '$stateParams', '$log', 
    function ($scope,   Addon,   $stateParams,    $log) {
  
    $log.info('init addonsController')
    
    $scope.addons = Addon.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);