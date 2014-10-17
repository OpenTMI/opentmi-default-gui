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
  'ngAnimate'
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
.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {

      
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
        templateUrl: 'app/pages/home.html',
        controller: 'homeController'
      })
      /*
      .state('campaigns', {
        url: '/campaigns',
        templateUrl: 'app/campaigns/campaigns.html',
        //controller: 'campaignsController'
      })
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/resources/resources.html',
        //controller: 'resourcesController'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/configures/configure.html',
        controller: 'configController'
      })*/
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about.html',
        controller: 'aboutController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/pages/contact.html',
        controller: 'contactController'
      });
}]);