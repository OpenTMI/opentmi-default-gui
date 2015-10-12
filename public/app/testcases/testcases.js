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
                controller: 'TestcaseFilterController'
              },
              'tcBody@testcases': { 
                templateUrl: 'app/testcases/testcases.list.html',
                controller: 'TestcaseListController',
              },
              'tcStatus@testcases': { 
                templateUrl: 'app/testcases/testcases.status.html',
                controller: 'TestcaseStatusController',
              }
          }
        })
        .state('testcases.detail', {
          url: '/{testcaseId:[0-9a-fA-F]{24}}',
          controller: 'TestcaseDetailsController',
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
        .state('testcases.tree', {
          url: '/tree',
          views: {
            'tcBody@testcases': {
              controller: 'TestcaseTreeController',
              templateUrl: 'app/testcases/testcases.tree.html'
            },
            'tcStatus@testcases': {
              controller: 'TestcaseStatusController',
              templateUrl: 'app/testcases/testcases.status.html'
            }
          }
        })
      }
  ]
);