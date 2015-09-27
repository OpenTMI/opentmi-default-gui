'use strict';

angular.module('tmtControllers')
  .controller('BuildTreeController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init BuildTreeController')
    $scope.treeModel = [{
        "id": "targets",
        "parent": "#",
        "text": "By Targets"
      },
        {
          "id": "k64f",
          "parent": "targets",
          "text": "K64F"
        }, 
          {
            "id": "1234",
            "parent": "k64f",
            "text": "SN-1234"
          }, 
      {
        "id": "features",
        "parent": "#",
        "text": "By Features"
      },
        {
          "id": "nrf",
          "parent": "targets",
          "text": "nRF81"
        },{
            "id": "fea1",
            "parent": "features",
            "text": "ethernet"
          },{
            "id": "fea2",
            "parent": "features",
            "text": "usb"
          }
      ];
  }])
;