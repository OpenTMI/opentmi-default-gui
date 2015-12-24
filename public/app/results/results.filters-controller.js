'use strict';

angular.module('OpenTMIControllers')
  .controller('ResultFilterController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init ResultFilterController')
    
    $scope.tags = [];

    $scope.$watch('tags',function(val){
      var tags = [];
      $scope.tags.forEach( function(o){ 
        tags.push( o.text);
      });
      $scope.$root.$broadcast('resultFilter', {tags: tags});
    }, true);
  }]);