'use strict';

angular.module('tmtControllers')
  .controller('addonsController', 
             ['$scope', 'Addons', '$stateParams', '$log', 
    function ($scope,   Addons,   $stateParams,    $log) {
  
    $log.info('init addonsController')
    
    $scope.addons = Addons.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);