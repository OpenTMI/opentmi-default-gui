angular.module('tmtApp.testcases', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('yotta', {
          url: '/yotta',
          templateUrl: 'app/yotta/yotta.tree.html',
          controller: 'YottaTreeController'
        })
      }
  ]
);