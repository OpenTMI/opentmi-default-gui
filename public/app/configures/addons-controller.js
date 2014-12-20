'use strict';

angular.module('tmtControllers')
  .controller('AddonsController', 
             ['$scope', 'Addons', '$stateParams', '$log', 
    function ($scope,   Addons,   $stateParams,    $log) {
  
    $log.info('init AddonsController')
    
    $scope.addons = Addons.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);