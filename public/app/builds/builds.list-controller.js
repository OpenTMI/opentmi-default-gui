'use strict';

angular.module('tmtControllers')
  .controller('BuildListController', 
             ['$scope', 'Builds', '$stateParams', '$log',
    function ($scope,   Builds,   $stateParams,    $log) {
  
    $log.info('init BuildListController')
    
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/duts/builds/{{ row.entity.id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [  
      { field: 'target.type', width:100, cellTemplate: linkCellTemplate, displayName: 'Type'  }, 
      { field: 'target.hw.platform', width:200, displayName: 'Target' }, 
      { field: 'branch', width:100, displayName: 'Branch' }, 
      { field: 'name', displayName: 'Name' },
    ]; 
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      //enableColumnResizing: true,
      enableFiltering: true,
      //showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true
    };
    
    function doUpdateList(q)
    {
      if(!q) q = {}
      Builds.query({fl: false, q: JSON.stringify(q), f: "uuid name target"})
        .$promise.then( function(builds){
          $log.info(builds);
          $scope.dataBuilds = builds;
          $scope.$root.$broadcast('buildListStatus', status);
      });
    }
    
    $scope.gridOptions.data = 'dataBuilds';
    doUpdateList();
    /*
    $scope.$on('tcFilter', function(event, data) {
      
      var q = {}
      data.tags.forEach( function(tag){
        if( !q.$or ) q.$or = [];
        q.$and.push( {target: {"$regex": ("/"+tag+"/"), "$options":"i"}} );
      });
      doUpdateList(q);
      
    });*/
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
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