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
          templateUrl: 'app/testcases/testcases.html',
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
          views: {
              'tcBody@testcases': { 
                templateUrl: 'app/testcases/testcase.details.html',
                controller: 'TestcaseDetailsController'
              },
              'tcStatus@testcases': { 
                templateUrl: 'app/testcases/testcase.details.status.html',
                controller: 'TestcaseHistoryController',
              }
          }
        })
        .state('testcases.tree', {
          url: '/tree',
          templateUrl: 'app/testcases/testcases.html',
          views: {
            'tcFilters@testcases': { 
              templateUrl: 'app/testcases/testcases.filters.html',
              controller: 'TestcaseFilterController'
            },
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