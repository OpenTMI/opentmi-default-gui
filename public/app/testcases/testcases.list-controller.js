'use strict';

angular.module('OpenTMIControllers')
  .controller('TestcaseListController', 
             ['$scope', 'Testcase', '$stateParams', '$log',
    function ($scope,   Testcase,   $stateParams,    $log) {
  
    $log.info('init TestcaseListController')
    
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/testcases/{{ row.entity.id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [ 
      { field: 'tcid', /*width:200,*/ enableCellEdit: true, cellTemplate: linkCellTemplate, displayName: 'TC'  }, 
      { field: 'status.value', width:100, enableCellEdit: true, displayName: 'Status', 
        editableCellTemplate: 'ui-grid/dropdownEditor',
        //cellFilter: 'mapStatus', 
        editDropdownValueLabel: 'status', editDropdownOptionsArray: [
          { id: 'released', status: 'released' }, 
          { id: 'development', status: 'development'   },
          { id: 'maintenance', status: 'maintenance' },
          { id: 'unknown', status: 'unknown' }
        ]
      },
      //{ field: 'cre.user', width:200, enableCellEdit: true, displayName: 'Creator' },
      { field: 'owner.name', width:100, 
        enableCellEdit: true, displayName: 'Owner' },
      { field: 'other_info.type', width:100, 
        enableCellEdit: true, displayName: 'Type' },
      { field: 'other_info.components', width: 100, 
        enableCellEdit: true, displayName: 'Components' },
      //{ field: 'other_info.layer', width:50, enableCellEdit: true, displayName: 'Layer',
      // editableCellTemplate: 'ui-grid/dropdownEditor',
      // //cellFilter: 'mapStatus', 
      // editDropdownValueLabel: 'status', editDropdownOptionsArray: [
      //   { id: 'L1', status: 'L1' }, 
      //   { id: 'L2', status: 'L2'   },
      //   { id: 'L12', status: 'L12' },
      //   { id: 'L3', status: 'L3' },
      //   { id: 'unknown', status: 'unknown' },
      // ] },

      //{ field: 'specs', enableCellEdit: true },
      //{ field: 'history.durationAvg', width:100, enableCellEdit: true, cellTemplate: defaultCellTemplate },
    ]; 
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
      //enableRowSelection: true,
      enableFullRowSelection: true,
      multiSelect: false,
      showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true
    };

    Object.resolve = function(path, obj, safe) {
        return path.split('.').reduce(function(prev, curr) {
            return !safe ? prev[curr] : (prev ? prev[curr] : undefined)
        }, obj || self)
    }
    var status = {
              dataLength: 0,
              totalDuration: 0 };
        
    var updateListStatus = function(){
      $scope.$root.$broadcast('tcListStatus', status);
    }  
    
    function doUpdateList(q)
    {
      Testcase.query({q: JSON.stringify(q), f: "tcid execution.estimation.duration status owner other_info.type other_info.components"}).$promise.then( 
        function(testcases){
          status.dataLength = testcases.length;
          status.totalDuration = 0;
          var TotalDuration = 0;
          testcases.forEach( function(tc){
            if( Object.resolve('execution.estimation.duration', tc) ) {
                status.totalDuration += Object.resolve('execution.estimation.duration', tc, 0);
            }
          });
          $scope.dataTestcases = testcases;
          updateListStatus();
      });
    }
    
    $scope.gridOptions.data = 'dataTestcases';
    doUpdateList({});
    
    $scope.$on('tcFilter', function(event, data) {
      
      var q = {}
      data.tags.forEach( function(tag){
        if( !q.$and ) q.$and = [];

        var or = [
          {tcid: {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'other_info.components': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'other_info.features': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'other_info.type': {"$regex": ("/"+tag+"/"), "$options":"i"}},
          {'status.value': {"$regex": ("/"+tag+"/"), "$options":"i"}},

        ]
        q.$and.push( {$or: or} );
      });
      doUpdateList(q);
      
    });
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      console.log(gridApi.selection)
      gridApi.selection.on.rowSelectionChanged($scope,function(row){
        var msg = 'row selected ' + row.isSelected;
        if( row.isSelected ) {
          $scope.$root.$broadcast('tcStatus', row.entity);
        } else updateListStatus();
      });
      gridApi.edit.on.afterCellEdit($scope,
        function(rowEntity, colDef, newValue, oldValue){
        
        $log.info('edited tc: ' + rowEntity.tcid + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue);
        //Somewhy this not working property!
        $scope.$root.$broadcast('tcListStatus', 
            {lastCellEdited: 'edited tc: ' + rowEntity.tcid + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue});
        
        rowEntity.$update( function( response ) {
          //$scope.$root.$broadcast('tcListStatus', {error: null});
          $log.info("Update success");
        }, function( error ) {
          $scope.$root.$broadcast('tcListStatus', {error: error});
          $log.info("Update fails");
        });
      });
    }; 
    
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