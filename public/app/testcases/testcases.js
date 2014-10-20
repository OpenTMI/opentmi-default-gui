angular.module('tmtApp.testcases', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('testcases', {
          abstract: true,
          url: '/testcases',
          templateUrl: 'app/testcases/testcases.html'
        })
        .state('testcases.list', {
          url: '',
          views: {
              'tcFilters@testcases': { 
                templateUrl: 'app/testcases/testcases.filters.html',
                controller: 'tcFilterController'
              },
              'tcBody@testcases': { 
                templateUrl: 'app/testcases/testcases.list.html',
                controller: 'tcController',
              },
              'tcStatus@testcases': { 
                templateUrl: 'app/testcases/testcases.status.html',
                controller: 'tcStatusController',
              }
          }
        })
        .state('testcases.detail', {
          url: '/{testcaseId:[0-9a-fA-F]{24}}',
          controller: 'tcDetailsController',
          views: {
              'tcFilters@testcases': { 
                templateUrl: 'app/testcases/testcases.details.filters.html',
              },
              'tcBody@testcases': { 
                templateUrl: 'app/testcases/testcases.details.html'
              },
              'tcStatus@testcases': { 
                templateUrl: 'app/testcases/testcases.details.status.html'
              }
          }
        })
      }
  ]
);