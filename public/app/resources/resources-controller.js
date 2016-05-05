'use strict';

angular.module('OpenTMIControllers')
  .controller('ResourcesController', 
             ['$scope', 'Resource', '$stateParams', '$log', 
    function ($scope,   Resource,   $stateParams,    $log) {
  
    $log.info('init ResourcesController')
    
    var updateTable = function(q){
      var q = q||{};
      Resource.query({q: JSON.stringify(q), p:'type_info'}, function(resources){
        console.log(resources);
        $scope.dataResources = resources;
      });
    }
    $scope.columns = [
      { field: 'name', width:200, enableCellEdit: true, displayName: 'Name' },
      { field: 'type', width:50, enableCellEdit: false, displayName: 'Type' },
      { field: 'target.name', width:100, enableCellEdit: true, displayName: 'Type Name'},
      { field: 'status.value', width:80, enableCellEdit: true, displayName: 'State'},
      { field: 'usage.type', width:130, enableCellEdit: true, displayName: 'Usage Type'},
      { field: 'target.meta_info.manufacturer', width:100, enableCellEdit: true, displayName: 'Manufacturer'},
      { field: 'target.meta_info.model', width:100, enableCellEdit: true, displayName: 'Model'},
      //{ field: 'status.value', width:100, enableCellEdit: true, displayName: 'State'},
    ]

    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
      enableCellEdit: true,
      //enableRowSelection: true,
      enableFullRowSelection: true,
      multiSelect: false,
      showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      data: 'dataResources',
      onRegisterApi: function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
      }
    }
    updateTable();
  }]);