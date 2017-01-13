'use strict';

angular.module('OpenTMIControllers')
  .controller('BuildListController', 
             ['$scope', 'Builds', '$http', '$stateParams', '$log',
    function ($scope,   Builds,    $http,   $stateParams,   $log) {
  
    $log.info('init BuildListController');
    
    
    var vcsLinkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="{{ row.entity.vcs[0].url }}">{{ row.entity.vcs[0].branch }}</a>' +
                       '</div>';
    var ciLinkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="{{ row.entity.ci.location.url }}">{{ row.entity.ci.job.name}} PR#{{ row.entity.ci.job.number}}</a>' +
                       '</div>';
    var nameTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/duts/builds/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var dlCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a target="new" href="api/v0/duts/builds/{{ row.entity._id }}/files/0/download">{{ COL_FIELD }} ({{(row.entity.files[0].size/1024).toFixed(0)}} kB)</a>' +
                       '</div>';
    //var toolchainCellTemplate = '<div class="ui-grid-cell-contents"><span>{{_.find(["gcc","armcc","iar"], function(s){return s.match(COL_FIELD.toLower()}}</span></div>';

    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';

    $scope.columns = [
      { field: 'cre.time', width:200, displayName: 'Date' },
      { field: 'name', width:350, cellTemplate: nameTemplate, displayName: 'Name' },
      { field: 'target.os', width:100, displayName: 'OS' },
      { field: 'target.hw.model', width:200, displayName: 'Target' },
      { field: 'vcs[0].branch', width:100, cellTemplate: vcsLinkCellTemplate, displayName: 'PR' },
      { field: 'ci[0].url', width:300, cellTemplate: ciLinkCellTemplate, displayName: 'CI Job' },
      { field: 'configuration.name', width:150, displayName: 'Configuration' },
      { field: 'configuration.toolchain.name', width:160, /*cellTemplate: toolchainCellTemplate,*/ displayName: 'Toolchain' },
      { field: 'files[0].name', cellTemplate: dlCellTemplate, displayName: 'File', cellTooltip: function (row, col) {return row.entity.name} }
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
    $scope.pagination = {
        pageSize: 100,
        pageNumber: 0,
        totalItems: null,
        getTotalPages: function () {
            return Math.ceil(this.totalItems / this.pageSize);
        },
        nextPage: function () {
            if (this.pageNumber < this.getTotalPages()) {
                this.pageNumber++;
                $scope.load();
            }
        },
        previousPage: function () {
            if (this.pageNumber > 0) {
                this.pageNumber--;
                $scope.load();
            }
        }
    };

    $http.get('/api/v0/duts/builds?t=count').success(function(response) {
        $scope.pagination.totalItems = response.count;
    });
    
    $scope.load = function(q)
    {
      if(!q) q = {};
      let req = {
          q: JSON.stringify(q),
          f: "_id name target files configuration cre.time vcs ci",
          s: {'cre.time': -1},
          sk: $scope.pagination.pageSize*$scope.pagination.pageNumber,
          l: $scope.pagination.pageSize
      };
      Builds.query(req).$promise.then( function(builds){
          $log.info(builds);
          $scope.dataBuilds = builds;
          $scope.$root.$broadcast('buildListStatus', status);
      });
    }
    
    $scope.gridOptions.data = 'dataBuilds';
    $scope.load();
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
    }; 
    
  }])
  
  ;
