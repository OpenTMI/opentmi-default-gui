'use strict';	

// create the module and name it scotchApp
angular.module('tmtApp', [
  'tmtApp.testcases',
  'tmtApp.campaigns',
  'tmtApp.configures',
  'tmtControllers', 
  'tmtServices',
  'ui.bootstrap', 
  'ui.router', 
  'ngTagsInput', 
  'ngAnimate',
  'restangular',
  'ui.grid', 
  'ui.grid.edit', 
  'ui.grid.pinning',
  /*, 'ui.grid.exporter', 'ui.grid.selection',*/
  'btford.socket-io'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)
// configure our routes
.config(['$stateProvider', '$urlRouterProvider',  'RestangularProvider',
  function($stateProvider,  $urlRouterProvider, RestangularProvider ) {

      
    // Redirects and Otherwise //
    
    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
    //$urlRouterProvider
      // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
      // Here we are just setting up some convenience urls.
      //.when('/tc?id', '/testcases/:id')
      //.when('/testcases/:id', '/testcases/:id')
      // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
    //  .otherwise('/');
    
    // State Configurations 
    $stateProvider
     
      .state('home', {
        url: '',
        templateUrl: 'app/pages/home.html'
      })
      /*
      .state('campaigns', {
        url: '/campaigns',
        templateUrl: 'app/campaigns/campaigns.html',
        //controller: 'CampaignsController'
      })*/
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/resources/resources.html',
        //controller: 'ResourcesController'
      })/*
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/configures/configure.html',
        controller: 'ConfigController'
      })*/
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about.html',
        controller: 'AboutController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/pages/contact.html',
        controller: 'ContactController'
      });

    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setBaseUrl('/api/v0');
}]);