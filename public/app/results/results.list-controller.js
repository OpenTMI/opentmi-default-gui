'use strict';

angular.module('OpenTMIControllers')
  .controller('ResultListController', 
             ['$scope', 'Result', 'Testcase', '$stateParams', '$timeout', '$log', '$q', 'uiGridConstants', 'uiGridGroupingConstants',
    function ($scope,   Result,    Testcase,   $stateParams,   $timeout, $log,   $q,   uiGridConstants, uiGridGroupingConstants) {
  
    $log.info('init ResultListController');
    $scope.gridMode = 'plain';

    $scope.fields = function() {
       return _.reduce($scope.columns, function(s, o){ return s+' '+o.field; }, '')+' exec.sut.buildUrl';
    };

    $scope.data = [];
    $scope.query = {
      q: {}, 
      s: { 'cre.time': -1}
    };
    $scope.firstPage = 0;
    $scope.lastPage = 1;
    $scope.pageSize = 100;

    $scope.setMode = function(value){
      console.log('mode change: '+value);
    };
    function checkStart(term, value, row, column) {
        term = term.replace(/\\/g,"")
        var now = moment(value);
        if(term) {
            if(moment(term).isAfter(now, 'day')) return false;;
        } 
        return true;
    };

    function checkEnd(term, value, row, column) {
        term = term.replace(/\\/g,"")
        var now = moment(value);
        if(term) {
            if(moment(term).isBefore(now, 'day')) return false;;
        } 
        return true;
    };

    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/results/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var linkToJob = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="{{ row.entity.exec.sut.buildUrl }}">' +
                        '{{ COL_FIELD }}'+
                       '</a>' +
                       '</div>';

    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [ 
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
      { field: 'exec.sut.buildName', width:200, displayName: 'Build'  }, 
      { field: 'job.id', width:200, cellTemplate: linkToJob, displayName: 'JobId'  },
      { field: 'tcid', cellTemplate: linkCellTemplate, width:200, displayName: 'TC',
        customTreeAggregationFn: function( aggregation, fieldValue, numValue, row ) {
          if ( typeof aggregation.components === 'undefined' ) { 
            aggregation.summary = {
              count: 0
            };
          }
          aggregation.summary.count++;
        },
        customTreeAggregationFinalizerFn: function(aggregation){
          if(aggregation.summary ){
            aggregation.rendered = "Amount: "+aggregation.summary.count;
          }
        } 
      }, 
      { field: 'exec.verdict',  width:100, displayName: 'Verdict',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          var value = grid.getCellValue(row,col)
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
        width: 100,
        displayName: 'Note' },
      /*{ field: 'campaign', width:150, 
        //grouping: { groupPriority: 0 },
        cellTemplate: defaultCellTemplate, displayName: 'Campaign' }, */
      { field: 'exec.duration', width:100, displayName: 'Duration',
        aggregationType: uiGridConstants.aggregationTypes.avg,
        cellFilter: 'durationFilter',
        treeAggregationType: uiGridGroupingConstants.aggregation.AVG },
      { field: 'exec.dut.type',  width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'DutType' },
      { field: 'exec.sut.cut', width:140, 
        cellTemplate: defaultCellTemplate, displayName: 'Components',
        customTreeAggregationFn: function( aggregation, fieldValue, numValue, row ) {
          if ( typeof aggregation.components === 'undefined' ) { 
            aggregation.components = []
          }
          fieldValue.forEach( function(component){
            if( aggregation.components.indexOf(component)<0) {
              aggregation.components.push(component);
            }
          });  
        },
        customTreeAggregationFinalizerFn: function(aggregation){
          if( aggregation.components ){
            aggregation.rendered = aggregation.components;
          }
        }
      },
    ]; 
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      treeRowHeaderAlwaysVisible: false,
      enableRowSelection: false,
      enableFullRowSelection: false,
      enableColumnResizing: true,
      enableFiltering: true,
      useExternalFiltering: true,
      enableCellEdit: false,
      showGridFooter: true,
      showColumnFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      infiniteScrollRowsFromEnd: 30,
      infiniteScrollUp: true,
      infiniteScrollDown: true,
      onRegisterApi: function( gridApi ) {
        gridApi.infiniteScroll.on.needLoadMoreData($scope, $scope.getDataDown);
        gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, $scope.getDataUp);
        gridApi.core.on.filterChanged( $scope, function(){
          if (angular.isDefined($scope.filterTimeout)) {
              $timeout.cancel($scope.filterTimeout);
          }
          $scope.filterTimeout = $timeout(function () {
              $scope.filterChanged();
          }, 1000);
        } );
        $scope.gridApi = gridApi;
        
        //$scope.gridApi.grouping.groupColumn('campaign');
      },
      data: 'data'
    };

    $scope.$on("$destroy", function (event) {
      if (angular.isDefined($scope.filterTimeout)) {
          $timeout.cancel($scope.filterTimeout);
      }
    });
    
    $scope.filterChanged = function(){
      var grid = this.grid;
      var filters = [];
      $scope.gridApi.grid.columns.forEach( function(column) {
        if( column.filters && column.filters.length > 0 ) {
          var colFilters = [];
          column.filters.forEach( function(filter){
            if( filter.term ){
              colFilters.push(filter.term);
            }
          });
          if( colFilters.length===1){
            var value = '';
            if( column.name === 'cre.time'){
              value = {"$gte": moment(colFilters[0])};
            } else {
              value = {"$regex": ("/"+colFilters[0]+"/"), "$options":"i"};
            }
            filters.push({
              key: column.name, 
              value: value
            });
          } else if( colFilters.length > 1 ){
            console.log('multiple filters..');
            var value = '';
            if( column.name === 'cre.time'){
              value = {
                "$gte": moment(colFilters[0]),
                "$lte": moment(colFilters[1])
              };
            } else {
              value = {"$regex": ("/"+colFilters[0]+"/"), "$options":"i"};
            }
            filters.push({
              key: column.name, 
              value: value
            });
          }
        }
        
      });
      console.log(filters);
      $scope.query.q = {}  
      if( filters.length > 0 ) {
        filters.forEach( function(filter){
          $scope.query.q[filter.key] = filter.value;
        });
      }
      console.log( JSON.stringify($scope.query.q));
      $scope.reset();
    }
    $scope.getFirstData = function() {
      var promise = $q.defer();
      Result.query({
          q: JSON.stringify($scope.query.q), 
          s: $scope.query.s,
          l: $scope.pageSize,
          f: $scope.fields()
      })
      .$promise.then(function(newData){
        $scope.data = $scope.data.concat(newData);
        promise.resolve();
      });
      return promise.promise;
    }
    $scope.getDataDown = function() {
      var promise = $q.defer();
      Result.query({
          q: JSON.stringify($scope.query.q), 
          s: $scope.query.s,
          l: $scope.pageSize,
          sk: $scope.lastPage*$scope.pageSize,
          f: $scope.fields()
      })
      .$promise.then(function(newData){
        $log.debug("getNewData()");
        $scope.lastPage++;
        $scope.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.data = $scope.data.concat(newData);
        $scope.gridApi.infiniteScroll.dataLoaded(
          $scope.firstPage > 0, 
          $scope.lastPage < 4
        ).then(function() {
          $scope.checkDataLength('up');
        }).then(function() {
          promise.resolve();
        });
      }, function(error) {
        $scope.gridApi.infiniteScroll.dataLoaded();
        promise.reject();
      });
      return promise.promise;
    }
    $scope.getDataUp = function() {
      var promise = $q.defer();
      Result.query({
          q: JSON.stringify($scope.query.q), 
          s: $scope.query.s,
          l: $scope.pageSize,
          sk: $scope.firstPage*$scope.pageSize,
          f: $scope.fields()
      })
      .$promise.then(function(newData){
        $scope.firstPage--;
        $scope.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.data = newData.concat($scope.data);
        $scope.gridApi.infiniteScroll.dataLoaded(
          $scope.firstPage > 0, $scope.lastPage < 4
        ).then(function() {
          $scope.checkDataLength('down');
        }).then(function() {
          promise.resolve();
        });
      }, function(error) {
        $scope.gridApi.infiniteScroll.dataLoaded();
        promise.reject();
      });
      return promise.promise;
    };
    $scope.checkDataLength = function( discardDirection) {
      return; /// @todo logic not working yet
      // work out whether we need to discard a page, if so discard from the direction passed in
      if( $scope.lastPage - $scope.firstPage > 3 ){
        // we want to remove a page
        $scope.gridApi.infiniteScroll.saveScrollPercentage();
   
        if( discardDirection === 'up' ){
          $scope.data = $scope.data.slice($scope.pageSize);
          $scope.firstPage++;
          $timeout(function() {
            // wait for grid to ingest data changes
            $scope.gridApi.infiniteScroll.dataRemovedTop(
              $scope.firstPage > 0, 
              $scope.lastPage < 4);
          });
        } else {
          $scope.data = $scope.data.slice(0, $scope.pageSize);
          $scope.lastPage--;
          $timeout(function() {
            // wait for grid to ingest data changes
            $scope.gridApi.infiniteScroll.dataRemovedBottom(
              $scope.firstPage > 0, 
              $scope.lastPage < 4);
          });
        }
      }
    };
    $scope.reset = function() {
      $scope.firstPage = 0;
      $scope.lastPage = 1;
   
      // turn off the infinite scroll handling up and down - hopefully this won't be needed after @swalters scrolling changes
      $scope.gridApi.infiniteScroll.setScrollDirections( false, false );
      $scope.data = [];
   
      $scope.getFirstData().then(function(){
        $timeout(function() {
          // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
          $scope.gridApi.infiniteScroll.resetScroll( 
            $scope.firstPage > 0, $scope.lastPage < 4 );
        });
      });
    };
   
    $scope.getFirstData().then(function(){
      $timeout(function() {
        // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
        // you need to call resetData once you've loaded your data if you want to enable scroll up,
        // it adjusts the scroll position down one pixel so that we can generate scroll up events
        $scope.gridApi.infiniteScroll.resetScroll( 
          $scope.firstPage > 0, $scope.lastPage < 4 );
      });
    });
    /*
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
      $scope.query.q = q;
      $scope.reset();
      
    });
    */
  }])
  .filter('durationFilter', function () {
    return function (value) {
      var duration = moment.duration(value, 'seconds')
      var durationStr = '';
      function fixedInt(val){
        return ("0" + val).slice(-2);
      }
      if( duration.hours()>0) {
        durationStr += fixedInt(duration.hours())+':';
      }
      durationStr += fixedInt(duration.minutes())+':'+fixedInt(duration.seconds());
      return durationStr;
    };
  })
  .directive('datePicker', function(){
    return {
        restrict : "A",
        require: 'ngModel',
        link : function(scope, element, attrs, ngModel){
            $(function(){
                $(element).datepicker({
                     changeMonth: true,
                     changeYear: true,
                     closeText: 'Clear',
                     showButtonPanel: true,
                     onClose: function (value, obj) {
                        // If "Clear" gets clicked, then really clear it
                        if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
                            $(this).val('');
                            scope.$apply(function() {
                               ngModel.$setViewValue(null);
                            });
                        }
                    },
                    onSelect: function(date){
                        scope.$apply(function() {
                           ngModel.$setViewValue(date);
                        });
                    }
               });
            })
        }
    }
  })
  
  /*
  .service('stats', function(){
    var service = {
        aggregator: {
          accumulate: {
            // This is to be used with the uiGrid customTreeAggregationFn definition,
            // to accumulate all of the data into an array for sorting or other operations by customTreeAggregationFinalizerFn
            // In general this strategy is not the most efficient way to generate grouped statistics, but
            // sometime is the only way.
            numValue: function (aggregation, fieldValue, numValue) {
              return coreAccumulate(aggregation, numValue);
            },
            fieldValue: function (aggregation, fieldValue) {
              return coreAccumulate(aggregation, fieldValue);
            }
          },
        }
      }
      return service;
  })*/
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