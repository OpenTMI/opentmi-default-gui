'use strict';

angular.module('tmtControllers')
  .controller('AddonsController', 
             ['$scope', 'Addon', '$stateParams', '$log', 
    function ($scope,   Addon,   $stateParams,    $log) {
  
    $log.info('init AddonsController')
    
    $scope.addons = Addon.query({fl: true});
    
  }]);