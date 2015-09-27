'use strict';

angular.module('tmtControllers')
  .controller('TestcaseTreeController', 
             ['$scope', 'Testcase', '$stateParams', '$log', 
    function ( $scope,   Testcase,   $stateParams,   $log) {
  

    $log.info('init TestcaseTreeController')


    $scope.treeModel = [
      {
        "id": "features",
        "parent": "#",
        "text": "By Features"
      },
        {
          "id": "connetivity",
          "parent": "features",
          "text": "Connectivity"
        },
          {
            "id": "6lowpan",
            "parent": "connetivity",
            "text": "6lowpan"
          },{
            "id": "thread",
            "parent": "connetivity",
            "text": "Thread"
          },{
            "id": "bluetooth",
            "parent": "connetivity",
            "text": "Bluetooth"
          },
        {
          "id": "drivers",
          "parent": "features",
          "text": "Drivers"
        },
          {
            "id": "uart",
            "parent": "drivers",
            "text": "uart"
          },{
            "id": "usb",
            "parent": "drivers",
            "text": "usb"
          },
      ];

      Testcase.query({t: 'distinct', f: "tcid", q: {'other_info.features': '6lowpan'}}).$promise.then( 
        function(lwpTcs){
          _.each(lwpTcs, function(tcid){
            $scope.treeModel.push({
              id: tcid,
              parent: '6lowpan',
              text: tcid
            });
          });
        }
        Testcase.query({t: 'distinct', f: "tcid", q: {'other_info.features': 'thread'}}).$promise.then( 
        function(lwpTcs){
          _.each(lwpTcs, function(tcid){
            $scope.treeModel.push({
              id: tcid,
              parent: 'thread',
              text: tcid
            });
          });
        } 
      );
  }])
;