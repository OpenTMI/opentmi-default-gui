angular.module('OpenTMI.builds', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('builds', {
          abstract: true,
          url: '/duts/builds',
          templateUrl: 'app/builds/builds.html'
        })
        .state('builds.list', {
          url: '',
          views: {
              'buildFilters@buids': { 
                templateUrl: 'app/builds/builds.filters.html',
                controller: 'BuildFilterController'
              },
              'buildBody@builds': { 
                templateUrl: 'app/builds/builds.list.html',
                controller: 'BuildListController',
              },
              'buildStatus@builds': { 
                templateUrl: 'app/builds/builds.status.html',
                controller: 'BuildStatusController',
              }
          }
        })/*
        .state('builds.detail', {
          url: '/{buildId:[0-9a-fA-F]{24}}',
          controller: 'BuildDetailsController',
          views: {
              'buildFilters@builds': { 
                templateUrl: 'app/builds/builds.details.filters.html',
              },
              'buildBody@builds': { 
                templateUrl: 'app/builds/builds.details.html'
              },
              'buildStatus@builds': { 
                templateUrl: 'app/builds/builds.details.status.html'
              }
          }
        })*/
        .state('builds.tree', {
          url: '/tree',
          views: {
            'buildBody@builds': {
              templateUrl: 'app/builds/builds.tree.html',
              controller: 'BuildTreeController'
            }
          }
        })
      }
  ]
);