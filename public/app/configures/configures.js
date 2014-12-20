angular.module('tmtApp.configures', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('accounts', {
          url: '/accounts',
          templateUrl: 'app/configures/accounts.html',
          controller: 'AccountController'
        })
        .state('groups', {
          url: '/groups',
          templateUrl: 'app/configures/groups.html',
          controller: 'GroupsController'
        })
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/configures/settings.html',
          controller: 'SettingsController'
        })
        .state('addons', {
          url: '/addons',
          templateUrl: 'app/configures/addons.html',
          controller: 'AddonsController'
        })
      }
  ]
);