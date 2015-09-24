'use strict';

angular.module('tmtControllers')
  .controller('BuildFilterController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init BuildFilterController')
    
    $scope.tags = [];

    $scope.$watch('tags',function(val){
      var tags = [];
      $scope.tags.forEach( function(o){ 
        tags.push( o.text);
      });
      $scope.$root.$broadcast('buildFilter', {tags: tags});
    }, true);
  }]);