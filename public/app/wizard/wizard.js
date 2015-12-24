angular.module('OpenTMI.wizard', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('wizard', {
          url: '/wizard',
          templateUrl: 'app/wizard/wizard.html',
          controller: 'WizardController'
        })
      }
  ]
);