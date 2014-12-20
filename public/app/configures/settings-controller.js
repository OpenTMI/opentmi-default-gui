'use strict';

angular.module('tmtControllers')
  .controller('settingsController', 
             ['$scope', 'Settings', '$stateParams', '$log', 
    function ($scope,   Settings,   $stateParams,    $log) {
  
    $log.info('init settingsController')
    
    $scope.settings = Settings.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);