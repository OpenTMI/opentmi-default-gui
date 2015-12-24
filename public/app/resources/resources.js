angular.module('OpenTMI.resources', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('resources', {
          url: '/resources',
          templateUrl: 'app/resources/resources.html',
          controller: 'ResourcesController'
        })
      }
  ]
);