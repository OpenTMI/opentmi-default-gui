'use strict';

angular.module('tmtControllers')
  .controller('TestcaseDetailsController', 
             ['$scope', 'Testcase', 'Result', '$stateParams', '$log', 'schemaForm',
    function ($scope,    Testcase,  Result, $stateParams,   $log) {

    $scope.oneAtATime = true;

    $log.info('init TestcaseDetailsController');

    $scope.$root.$broadcast('testcase.id', $stateParams.testcaseId);

    $scope.infoSchema = {
      type: "object",
      properties: {
        tcid: { 
          type: "string", 
          minLength: 2, 
          readonly: true,
          title: "Name",
          description: "Test case Name" 
        },
        status: {
          type: 'object',
          properties: {
            'value': {
              type: 'string',
              title: 'Status',
              enum: [ 'unknown', 'released', 'development', 'maintenance', 'broken' ], 
              description: 'Implementation Status'
            }
          }
        },
        other_info: {
          type: 'object',
          properties: {
            type: 'string',
            title: 'Type',
            enum: [
              "installation",
              "compatibility",
              "smoke",
              "regression",
              "acceptance",
              "alpha",
              "beta",
              "stability",
              "functional",
              "destructive",
              "performance",
              "reliability"
            ]
          }
        }
      }
    };

    $scope.infoForm = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];

    $scope.tinymceOptions = {
      onChange: function(e) {
        // put logic here for keypress and cut/paste changes
      },
      inline: false,
      removed_menuitems: 'newdocument',
      plugins : 'advlist autolink link image lists charmap print preview',
      skin: 'lightgray',
      theme : 'modern'
    };

    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/results/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [ 
      { field: 'cre.time', width: 100, type: 'date', 
        cellFilter: 'date:"yy/MM/dd HH:mm"',  displayName: 'Date'  }, 
      //{ field: 'other_info.component', width:100, displayName: 'Component' },
      { field: 'exec.verdict',  width:100, displayName: 'Verdict',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) == "pass") {
            return 'green';
          }
          return 'red';
        } },
      /*{ field: 'campaign', width:100, 
        //grouping: { groupPriority: 0 },
        cellTemplate: defaultCellTemplate, displayName: 'Campaign' },*/
      { field: 'exec.duration', width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'Duration' },
      { field: 'exec.dut.type',  width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'DutType' },
      { field: 'exec.sut.cut', 
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
      showFooter: false,
      exporterMenuCsv: true,
      enableGridMenu: true,
      onRegisterApi: function( gridApi ) {
        $scope.gridApi = gridApi;
        //$scope.gridApi.grouping.groupColumn('campaign');
      },
      data: 'dataResults'
    };
    
    $scope.testcase = {id: $stateParams.testcaseId};
    Testcase.get({id: $stateParams.testcaseId}, function(testcase){
      console.log(testcase);
      $scope.testcase = testcase;
    });

    Result.query({
          q: {tcid: $stateParams.testcaseId}, 
          s: { 'cre.time': -1},
          l: 5000
      }).$promise.then( 
        function(results){
          $scope.dataResults = results;
        }
      );

  }]);