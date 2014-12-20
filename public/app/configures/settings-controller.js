'use strict';

angular.module('tmtControllers')
  .controller('SettingsController', 
             ['$scope', 'Settings', '$stateParams', '$log', 
    function ($scope,   Settings,   $stateParams,    $log) {
  
    $log.info('init SettingsController')
    
    $scope.settings = Settings.query({fl: true /*, _id: $stateParams.accountId*/});
    
  }]);