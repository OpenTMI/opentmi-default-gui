'use strict';

angular.module('tmtControllers')
  .controller('TestcaseStatusController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init TestcaseStatusController')
    
    $scope.msg = {};
    $scope.alerts = [];
    $scope.tc = {};
    $scope.showTc = function(){ return $scope.show=='tc';}
    $scope.showList = function(){ return $scope.show=='list';}

   $scope.$on('tcStatus', function(event, data) {
      $scope.tc = data;
      $scope.show = 'tc';
   });
    
    $scope.$on('tcListStatus', function(event, data) {
      $scope.show = 'list';
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

    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({msg: msg, type: type});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    
  }])
  .filter('amDurationFormat', ['$window', function ($window) {
        'use strict';

        return function (value, format, suffix) {
            if (typeof value === 'undefined' || value === null) {
                return '';
            }

            if (!isNaN(parseFloat(value)) && isFinite(value)) {
                return '';
            }

            // else assume the given value is a duration in milliseconds
            return $window.moment.duration(value, format).humanize(suffix);
        };
    }])
;