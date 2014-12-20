'use strict';

angular.module('tmtControllers')
  .controller('CampaignsController', 
             ['$scope', 'Campaign', '$stateParams', '$log', 
    function ($scope,   Campaign,   $stateParams,    $log) {
  
    $log.info('init CampaignController')
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/campaigns/{{ row.entity.id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    
    $scope.columns = [ 
      { field: 'name', width:300, enableCellEdit: true, pinnedLeft:true, cellTemplate: linkCellTemplate  },
    ];
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      //enableFiltering: true,
      //exporterMenuCsv: true,
      enableGridMenu: true
    };
    
    $scope.campaignService = Campaign.query({fl: true, _id: $stateParams.campaignId});
    $scope.dataCampaigns = {};
    $scope.gridOptions.data = 'dataCampaigns';
    
    $scope.campaignService.$promise.then( function(campaigns){
      $scope.dataCampaigns = campaigns;
    });
    
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
        
        //Somewhy this not working property!
        $scope.msg.lastCellEdited = 'edited row id:' + rowEntity._id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
        $scope.$apply();
        
        rowEntity.$update( function( response ) {
          $scope.msg.error = null;
        }, function( error ) {
          $scope.msg.error = error;
        });
        
      });
    }; 
    
    
  }]);