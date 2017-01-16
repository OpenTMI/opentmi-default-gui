'use strict';

angular.module('OpenTMIControllers')
  .controller('ResultsDetailsController',
             ['$scope', 'Result', '$stateParams', '$log', 'uiGridConstants', 'uiGridGroupingConstants',
    function ($scope,   Result,  $stateParams,    $log, uiGridConstants, uiGridGroupingConstants) {

    $log.info('init ResultDetailsController');

    // Result informations
    var gotCb  = function(result) {
      $scope.result = result;
      $scope.resultsStr = JSON.stringify(result, null, 2);
      $scope.updateTrend();
    };
    Result.get({_id: $stateParams.resultId}, gotCb);

    // test trend
    $scope.resultsTrend = [];
    $scope.resultsTrendColumns = [
      { field: 'cre.time', width: 140, type: 'date',
        cellFilter: 'date:"yy/MM/dd HH:mm"', displayName: 'Date',
        filters: [
          { condition: uiGridConstants.filter.LESS_THAN },
          { condition: uiGridConstants.filter.GREATER_THAN }
        ],
        filterHeaderTemplate:
          '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters">'+
          '<input type="text" show-weeks="true" '+
          'class="ui-grid-filter-input" ng-model="colFilter.term" date-picker /></div>'
      },
      { field: 'exec.sut.buildName', width:150, displayName: 'Build'  },
      { field: 'campaign', width:250, displayName: 'Campaign' },
      { field: 'exec.verdict',  width:100, displayName: 'Verdict',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          var value = grid.getCellValue(row,col)
          if(!value) {
            return 'gray';
          }
          if (value.match(/pass/) || value.match(/100%/)) {
            return 'green';
          } //else if( value.match())
          return 'red';
        },
        customTreeAggregationFn: function( aggregation, fieldValue, numValue, row ) {
          if ( typeof aggregation.summary === 'undefined' ) {
            aggregation.summary = {
              count: 0,
              passCount: 0
            };
          }
          aggregation.summary.count++;
          if(fieldValue == 'pass'){
            aggregation.summary.passCount++;
          }
        },
        customTreeAggregationFinalizerFn: function(aggregation){
          if( aggregation.summary ){
            var passrate = 0;
            if(aggregation.summary.count>0){
              passrate = aggregation.summary.passCount /
                         aggregation.summary.count*100;
            }
            aggregation.rendered = 'PR: '+passrate.toFixed(0) + '%';
          }
        },
        filter: {
          type: uiGridConstants.filter.SELECT,
          selectOptions: [
              { value: 'pass', label: 'pass' },
              { value: 'fail', label: 'fail' },
              { value: 'inconclusive', label: 'inconclusive'}
            ]
        },
      },
      {
        field: 'exec.note',
        width: 250,
        displayName: 'Note' },
      { field: 'exec.duration', width:80, displayName: 'Duration',
        aggregationType: uiGridConstants.aggregationTypes.avg,
        cellFilter: 'durationFilter',
        treeAggregationType: uiGridGroupingConstants.aggregation.AVG },
      { field: 'exec.dut.model',  width:100, displayName: 'DutModel' }
    ];
    $scope.resultTrendGridOptions = {
      columnDefs: $scope.resultsTrendColumns,
      treeRowHeaderAlwaysVisible: false,
      enableRowSelection: false,
      enableFullRowSelection: false,
      enableColumnResizing: true,
      enableFiltering: false,
      useExternalFiltering: false,
      showGridFooter: true,
      showColumnFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      data: 'resultsTrend'
    };
    var gotTrend = function(history) {
        $scope.resultsTrend = $scope.resultsTrend.concat(history);
    }
    var getTrendFields = function() {
       return _.reduce($scope.resultsTrendColumns, function(s, o){ return s+' '+o.field; }, '');
    };
    $scope.updateTrend = function(tcid) {
      var q = _.pick($scope.result, ['tcid', 'exec.dut.type'])
      var req = {
        q: JSON.stringify(q),
        s: { 'cre.time': -1 },
        f: getTrendFields()
      };
      Result.query(req, gotTrend);
    };
    // logs
    $scope.resultLogColumns = [];
    $scope.resultLogs = [];
    $scope.resultLogGridOptions = {
      columnDefs: $scope.resultLogColumns,
      data: 'resultLogs'
    }
  }]);
