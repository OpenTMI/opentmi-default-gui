'use strict';

angular.module('tmtControllers')
  .controller('TestcaseController', 
             ['$scope', 'Testcase', '$stateParams', '$log',
    function ($scope,   Testcase,   $stateParams,    $log) {
  
    $log.info('init TestcaseController')
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/testcases/{{ row.entity.id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    $scope.columns = [ 
      { field: 'tcid', width:200, enableCellEdit: true, cellTemplate: linkCellTemplate, displayName: 'TC'  }, 
      { field: 'status.value', width:100, enableCellEdit: true, displayName: 'Status', 
        editableCellTemplate: 'ui-grid/dropdownEditor',
        /*cellFilter: 'mapStatus', */ editDropdownValueLabel: 'status', editDropdownOptionsArray: [
          { id: 'released', status: 'released' }, 
          { id: 'develop', status: 'develop'   },
          { id: 'maintenance', status: 'maintenance' },
          { id: 'unknown', status: 'unknown' }
        ]
      },
      { field: 'owner.name', width:200, enableCellEdit: true, displayName: 'User' }
      /*{ field: 'specs', enableCellEdit: true },
      { field: 'duration', width:100, enableCellEdit: true, cellTemplate: '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>' },
      { field: 'owner.user', enableCellEdit: true },*/
    ];
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
      //showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true
    };
    
    function doUpdateList(q)
    {
      Testcase.query({q: JSON.stringify(q)}).$promise.then( function(testcases){
        $scope.dataTestcases = testcases;
        $scope.$root.$broadcast('tcListStatus', {dataLength: testcases.length});
      });
    }
    
    $scope.gridOptions.data = 'dataTestcases';
    
    $scope.$on('tcFilter', function(event, data) {
      var q = {$and: []}
      data.tags.forEach( function(tag){
        q.$and.push( {tcid: {"$regex": ("/"+tag+"/"), "$options":"i"}} );
      });
      doUpdateList(q);
    });
    doUpdateList({});
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
        
        //Somewhy this not working property!
        $scope.$root.$broadcast('tcListStatus', {lastCellEdited: 'edited tc: ' + rowEntity.tcid + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue});
        
        rowEntity.$update( function( response ) {
          $scope.$root.$broadcast('tcListStatus', {error: null});
        }, function( error ) {
          $scope.$root.$broadcast('tcListStatus', {error: error});
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