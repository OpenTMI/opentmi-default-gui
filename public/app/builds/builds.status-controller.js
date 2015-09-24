'use strict';

angular.module('tmtControllers')
  .controller('BuildStatusController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init BuildStatusController')
    
    $scope.msg = {target: '', size: 0, url: ''};
    $scope.alerts = []
    
    $scope.$on('buildListStatus', function(event, data) {
      if( data.hasOwnProperty('lastCellEdited') ) 
        $scope.addAlert( {type: 'success', msg: data.lastCellEdited})
      if( data.hasOwnProperty('dataLength') ) 
        $scope.msg.dataLength = data.dataLength;
      if( data.hasOwnProperty('totalDuration') ) 
        $scope.msg.totalDuration = data.totalDuration;
      if( data.hasOwnProperty('lastError')) {
        $scope.addAlert( {type: 'error', msg: data.lastError });
      }
    });
    /*
    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({msg: msg, type: type});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };*/
    
  }])
;