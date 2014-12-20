'use strict';

angular.module('tmtControllers')
  .controller('TestcaseStatusController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init TestcaseStatusController')
    
    $scope.msg = {}
    
    $scope.$on('tcListStatus', function(event, data) {
      if( data.lastCellEdited ) 
        $scope.msg.lastCellEdited = data.lastCellEdited;
      if( data.dataLength ) 
        $scope.msg.dataLength = data.dataLength;      
      
    });
    
  }]);