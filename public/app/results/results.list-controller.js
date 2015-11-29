'use strict';

angular.module('tmtControllers')
  .controller('ResultListController', 
             ['$scope', 'Result', 'Testcase', '$stateParams', '$log', 'uiGridGroupingConstants',
    function ($scope,   Result,    Testcase,   $stateParams,   $log, uiGridGroupingConstants) {
  
    $log.info('init ResultListController');
    $scope.gridMode = 'plain';

    $scope.query = {};

    $scope.setMode = function(value){
      console.log('mode change: '+value);
      doUpdateList = 
      value==='plain'?updateRawValues:updateLatest;
      doUpdateList();
    }
    
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/results/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [ 
      { field: 'cre.time', width: 140, type: 'date', 
        cellFilter: 'date:"yy/MM/dd HH:mm"', displayName: 'Date'  }, 
      { field: 'job.id', width:200, displayName: 'JobId'  }, 
      { field: 'tcid', cellTemplate: linkCellTemplate, width:200, displayName: 'TC' }, 
      //{ field: 'other_info.component', width:100, displayName: 'Component' },
      { field: 'exec.verdict',  width:100, displayName: 'Verdict',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) == "pass") {
            return 'green';
          }
          return 'red';
        }, 
        customTreeAggregationFn: function( aggregation, fieldValue, numValue, row ) {
          if ( typeof aggregation.summary === 'undefined' ) { 
            aggregation.summary = {
              count: 0,
              passCount: 0,
              failCount: 0
            }; 
          }
          aggregation.summary.count++;
          if(fieldValue == 'pass'){
            aggregation.summary.passCount++;
          } else {
            aggregation.summary.failCount++;
          }
        },
        customTreeAggregationFinalizerFn: function(aggregation){
          var passrate = 0;
          if(aggregation.summary.count>0){
            passrate = aggregation.summary.passCount /
                       aggregation.summary.count*100;
          }
          console.log(aggregation);
          aggregation.rendered = 'PR: '+passrate.toFixed(0) + '%';
        }
      },
      /*{ field: 'campaign', width:100, 
        //grouping: { groupPriority: 0 },
        cellTemplate: defaultCellTemplate, displayName: 'Campaign' },*/
      { field: 'exec.duration', width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'Duration',
        treeAggregationType: uiGridGroupingConstants.aggregation.AVG },
      { field: 'exec.dut.type',  width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'DutType' },
      { field: 'exec.sut.cut', width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'Components' },
    ]; 
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      treeRowHeaderAlwaysVisible: false,
      enableRowSelection: false,
      enableFullRowSelection: false,
      enableColumnResizing: true,
      enableFiltering: true,
      enableCellEdit: false,
      showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      onRegisterApi: function( gridApi ) {
        $scope.gridApi = gridApi;
        //$scope.gridApi.grouping.groupColumn('campaign');
      }
    };
    
    $scope.update = function() {
        doUpdateList();
    }

    var doUpdateList = updateRawValues;

    function updateLatest(){
        Testcase.query({
          q: {'status.value': 'released'},
          t: 'distinct',
          f: 'tcid'
        }).$promise.then( function(tests){
          var results = []
          _.each(tests, function(tcid){
            var result = {tcid: tcid};
            console.log(tcid);
            Result.query({
              q: {tcid: tcid},
              s: {'cre.time': -1},
              l: 5000
            }).$promise.then( function(results){
              console.log('results available');
              if(results.length > 0)
                angular.extend(result, results[0]);
            });
            results.push(result)
          });
          $scope.dataResults = results;
        }); 
    }

    function updateRawValues(){
      $log.debug("doUpdateList");
      Result.query({
          q: JSON.stringify($scope.query), 
          s: { 'cre.time': -1},
          l: 5000
      }).$promise.then( 
        function(results){
          $scope.dataResults = results;
          var status = {
              dataLength: results.length,
              totalDuration: 0 };
          var TotalDuration = 0;
          results.forEach( function(result){
            if( result.hasOwnProperty('exec') && result.exec.hasOwnProperty('duration')  ){
              status.totalDuration += result.exec.duration;
            }
          });

          $scope.$root.$broadcast('resultListStatus', status);
      });
    }
    
    $scope.gridOptions.data = 'dataResults';
    

    
    $scope.$on('resultFilter', function(event, data) {
      var q = {}
      data.tags.forEach( function(tag){
        if( !q.$and ) q.$and = [];

        var or = [
          {tcid: {"$regex": ("/"+tag+"/"), "$options":"i"}},
          //{'exec.duration': tag}},
          {'exec.sut.fut': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'exec.sut.cut': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'exec.verdict': tag},
          {'campaign': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'job.id': {"$regex": ("/"+tag+"/"), "$options":"i"}}
          //{'exec.dut.type': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          //{'exec.dut.model': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          //{'campaign': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          //{'exec.sut.branch': {"$regex": ("/"+tag+"/"), "$options":"i"}},
        ]
        q.$and.push( {$or: or} );
      });
      $scope.query = q;
      doUpdateList();
      
    });
    doUpdateList();
    /*
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope,
        function(rowEntity, colDef, newValue, oldValue){
        
        //Somewhy this not working property!
        $scope.$root.$broadcast('resultListStatus', {lastCellEdited: 'edited result: ' + rowEntity.tcid + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue});
        
        rowEntity.$update( function( response ) {
          $scope.$root.$broadcast('resultListStatus', {error: null});
        }, function( error ) {
          $scope.$root.$broadcast('resultListStatus', {error: error});
        });
        
      });
    };*/
    
  }])
  /*
  .filter('mapStatus', function() {
    var statusHash = {
      'released': 'released',
      'develop': 'develop',
      'maintenance': 'maintenance',
      'unknown': 'unknown'
    };
    
    return function(input) {
      if (!input){
        return '';
      } else {
        return statusHash[input];
      }
    };
  })*/
  
  ;