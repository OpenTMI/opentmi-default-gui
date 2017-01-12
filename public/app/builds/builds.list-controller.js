'use strict';

angular.module('OpenTMIControllers')
  .controller('BuildListController', 
             ['$scope', 'Builds', '$stateParams', '$log',
    function ($scope,   Builds,   $stateParams,    $log) {
  
    $log.info('init BuildListController')
    
    
    var vcsLinkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="{{ row.entity.vcs[0].url }}">{{ row.entity.vcs[0].branch }}</a>' +
                       '</div>';
    var ciLinkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="{{ row.entity.ci.location.url }}">{{ row.entity.ci.job.name}} # {{ row.entity.ci.job.number}}</a>' +
                       '</div>';
    var nameTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/duts/builds/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var dlCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a target="new" href="api/v0/duts/builds/{{ row.entity._id }}/files/0/download">{{ COL_FIELD }} ({{(row.entity.files[0].size/1024).toFixed(0)}} kB)</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';

    $scope.columns = [
      { field: 'cre.time', width:200, displayName: 'Date' },
      { field: 'name', width:400, cellTemplate: nameTemplate, displayName: 'Name' },
      { field: 'target.os', width:100, displayName: 'OS' },
      { field: 'target.hw.model', width:150, displayName: 'Target' },
      { field: 'vcs[0].branch', width:100, cellTemplate: vcsLinkCellTemplate, displayName: 'PR' },
      { field: 'ci[0].url', width:100, cellTemplate: ciLinkCellTemplate, displayName: 'CI Job' },
      { field: 'configuration.name', width:150, displayName: 'Configuration' },
      { field: 'configuration.toolchain.name', width:100, displayName: 'Toolchain' },
      { field: 'files[0].name', cellTemplate: dlCellTemplate, displayName: 'File', cellTooltip: function (row, col) {return row.entity.name}  },
    ];
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
      enableRowSelection: true,
      showFooter: true,
      showGroupPanel: true,
      exporterMenuCsv: true,
      enableGridMenu: true
    };
    
    function doUpdateList(q)
    {
      if(!q) q = {};
      Builds.query({q: JSON.stringify(q), f: "_id name target files configuration cre.time vcs ci"})
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
