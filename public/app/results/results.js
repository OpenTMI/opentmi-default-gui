angular.module('tmtApp.results', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('results', {
          abstract: true,
          url: '/results',
          templateUrl: 'app/results/results.html'
        })
        .state('results.list', {
          url: '',
          views: {
              'resultFilters@results': { 
                templateUrl: 'app/results/results.filters.html',
                controller: 'ResultFilterController'
              },
              'resultBody@results': { 
                templateUrl: 'app/results/results.list.html',
                controller: 'ResultListController',
              },
              'resultStatus@results': { 
                templateUrl: 'app/results/results.status.html',
                controller: 'ResultStatusController',
              }
          }
        })
        .state('results.detail', {
          url: '/{resultId:[0-9a-fA-F]{24}}',
          controller: 'ResultDetailsController',
          views: {
              'resultFilters@results': { 
                templateUrl: 'app/results/results.details.filters.html',
              },
              'resultBody@results': { 
                templateUrl: 'app/results/results.details.html'
              },
              'resultStatus@results': { 
                templateUrl: 'app/results/results.details.status.html'
              }
          }
        })
      }
  ]
);