'use strict';

angular.module('OpenTMIControllers')
  .controller('BuildsDetailsController',
             ['$scope', 'Builds', '$stateParams', '$log', '$window',
    function ($scope,    Builds,   $stateParams,   $log,   $window) {

    $log.info('init BuildDetailsController');

    var gotCb  = function(error) {
        if(error) {
          return $log.error(error);
        }
    };
    $scope.build = Builds.get($stateParams.buildId, gotCb);

  }]);
