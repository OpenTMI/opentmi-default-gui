'use strict';

angular.module('OpenTMIControllers')
  .controller('TestcaseFilterController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init TestcaseFilterController')
    
    $scope.tags = [];

    $scope.$watch('tags',function(val){
      var tags = [];
      $scope.tags.forEach( function(o){ 
        tags.push( o.text);
      });
      $scope.$root.$broadcast('tcFilter', {tags: tags});
    }, true);
  }]);