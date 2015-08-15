'use strict';

angular.module('tmtControllers')
  .controller('ResultStatusController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init ResultStatusController')
    
    $scope.msg = {}
    $scope.alerts = []
    
    $scope.$on('resultListStatus', function(event, data) {
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