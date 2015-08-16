'use strict';

angular.module('tmtControllers')
  .controller('pivottableController', 
             ['$scope', 'Result', '$stateParams', '$log',
    function ($scope,   Result,   $stateParams,    $log) {
  
    $log.info('init pivottableController')
    $scope.results = [];
    Result.query({q: JSON.stringify({}), fl:true}).$promise.then( 
      function(results){
        $log.info(results)
        $scope.results = results;
        pivotUi()
    });
    
    function pivotUi() {
        //var derivers = $.pivotUtilities.derivers;
        var renderers = $.extend($.pivotUtilities.renderers, 
                    $.pivotUtilities.c3_renderers);
        $("#pivottable").pivotUI($scope.results, {
            rows: ["tcid"],
            cols: ["final.verdict"],
            rendererName: "Table",
            renderers: renderers,
        });
    }
    
  }])
  ;