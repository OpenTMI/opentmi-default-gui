'use strict';

angular.module('OpenTMIControllers')
  .controller('BuildsDetailsController',
             ['$scope', 'Builds', '$stateParams', '$log', '$window',
    function ($scope,    Builds,   $stateParams,   $log,   $window) {

    $log.info('init BuildDetailsController');

    var gotCb  = function(build) {
       $scope.build = build;
    };
    Builds.get($stateParams.buildId, gotCb);

  }]);
