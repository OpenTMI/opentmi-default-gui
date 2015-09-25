'use strict';

angular.module('tmtControllers')
  .controller('tcpivottableController', 
             ['$scope', 'Testcase', '$stateParams', '$log',
    function ($scope,   Testcase,   $stateParams,    $log) {
  
    $log.info('init tcpivottableController')
    $scope.testcases = [];
    
    $scope.update = function() {
        Testcase.query({f: 'tcid other_info compatible status requirements', q: JSON.stringify({}), fl:true}).$promise.then( 
          function(testcases){
            $log.info(testcases)
            
            for(var tc of testcases) {
                for( var key of Object.keys(tc)) {
                    if( tc[key] === "") {
                        delete tc[key];
                    }
                    else if( tc[key] instanceof Array ) {
                        delete tc[key];
                    } 
                    else if( key.match(/other_info\.components\.\d/)) {
                        tc.component = tc[key];
                        delete tc[key];
                    }
                    else if( key.match(/other_info\.features\.\d/)) {
                        tc.feature = tc[key];
                        delete tc[key];
                    } else if ( key.match(/.*\.\d$/)) {
                        delete tc[key];
                    }
                }
                if( !tc.component ) tc.component = '';
                if( !tc.feature ) tc.feature = '';
                
            }
            $scope.testcases = testcases;
            pivotUi()
        });
    }
    $scope.update();

    
    function pivotUi() {
        var derivers =    $.pivotUtilities.derivers;
        var dateFormat =  $.pivotUtilities.derivers.dateFormat;
        var sortAs =      $.pivotUtilities.sortAs;
        var tpl =         $.pivotUtilities.aggregatorTemplates;

        var renderers =   $.extend($.pivotUtilities.renderers, 
                          $.pivotUtilities.c3_renderers,
                          $.pivotUtilities.export_renderers);
        $("#pivottable").pivotUI($scope.testcases, {
            rows: ["component", "feature"],
            cols: [],
            rendererName: "Table",
            renderers: renderers,
            hiddenAttributes: ["__v","_id._bsontype","_id.id"],

        });
    }
    
  }])
  ;