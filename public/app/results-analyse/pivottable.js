angular.module('OpenTMI.resultsAnalyse', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('resultsAnalyse', {
          url: '/results-analyse',
          templateUrl: 'app/results-analyse/pivottable.html',
          controller: 'pivottableController'
        })
      }
  ]
);