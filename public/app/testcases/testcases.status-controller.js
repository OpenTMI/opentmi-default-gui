'use strict';

angular.module('tmtControllers')
  .controller('TestcaseStatusController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init TestcaseStatusController')
    
    $scope.msg = {}
    
    $scope.$on('tcListStatus', function(event, data) {
      console.log(data);
      if( data.hasOwnProperty('lastCellEdited') ) 
        $scope.msg.lastCellEdited = data.lastCellEdited;
      if( data.hasOwnProperty('dataLength') ) 
        $scope.msg.dataLength = data.dataLength;
      if( data.hasOwnProperty('lastError')) {
        $scope.msg.dataError = data.lastError;
      }
    });
    
  }]);