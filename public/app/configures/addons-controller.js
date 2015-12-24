'use strict';

angular.module('OpenTMIControllers')
  .controller('AddonsController', 
             ['$scope', 'Addon', '$stateParams', '$log', 
    function ($scope,   Addon,   $stateParams,    $log) {
  
    $log.info('init AddonsController')
    
    $scope.addons = Addon.query({fl: true});
    
  }]);