'use strict';

angular.module('tmtControllers')
  .controller('ResourcesController', 
             ['$scope', 'Resource', '$stateParams', '$log', 
    function ($scope,   Resource,   $stateParams,    $log) {
  
    $log.info('init ResourcesController')
    
    var updateTable = function(q){
      var q = q||{};
      Resource.query({q: JSON.stringify(q)}, function(resources){
        console.log(resources);
        $scope.dataResources = resources;
      });
    }
    $scope.columns = [
      { field: 'name', width:200, enableCellEdit: false, displayName: 'Name' },
      { field: 'type', width:150, enableCellEdit: false, displayName: 'Type' },
      { field: 'status.value', width:100, enableCellEdit: true, displayName: 'State'},
    ]

    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
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