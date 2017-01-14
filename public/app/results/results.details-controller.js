'use strict';

angular.module('OpenTMIControllers')
  .controller('ResultsDetailsController',
             ['$scope', 'Result', '$stateParams', '$log',
    function ($scope,   Result,  $stateParams,    $log) {

    $log.info('init ResultDetailsController');

    $scope.data = [];
    $scope.columns = [

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
      data: 'data'
    };

    var gotCb  = function(result) {
      $scope.result = result;
      $scope.resultsStr = JSON.stringify(result, null, 2);
    };
    Result.get({_id: $stateParams.resultId}, gotCb);

  }]);
