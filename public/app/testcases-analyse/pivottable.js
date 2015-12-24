angular.module('OpenTMI.testcasesAnalyse', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('testcasesAnalyse', {
          url: '/testcases-analyse',
          templateUrl: 'app/testcases-analyse/pivottable.html',
          controller: 'tcpivottableController'
        })
      }
  ]
);