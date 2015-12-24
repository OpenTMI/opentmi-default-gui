'use strict';	

// create the module and name it OpenTMI
angular.module('OpenTMI', [
  'OpenTMI.testcases',
  'OpenTMI.testcasesAnalyse',
  'OpenTMI.campaigns',
  'OpenTMI.builds',
  'OpenTMI.configures',
  'OpenTMI.results',
  'OpenTMI.resultsAnalyse',
  'OpenTMI.resources',
  'OpenTMI.wizard',
  'OpenTMI.yotta',
  'OpenTMIControllers', 
  'tmtServices',
  'angularLoad',
  'ui.bootstrap', 
  'ui.router', 
  'ngTagsInput', 
  'ngAnimate',
  'ngStorage',
  'ngCookies',
  'restangular',
  'ui.grid', 
  'ui.grid.edit', 
  'ui.grid.pinning',
  'ui.grid.selection',
  'ui.grid.exporter',
  'ui.grid.grouping',
  'ui.grid.resizeColumns',
  'ui.grid.infiniteScroll',
  'schemaForm',
  'ui.tinymce',
  'btford.socket-io',
  'angularMoment',
  'jsTree.directive',
  'jsonFormatter',
  'd3-multi-parent',
  'mgo-angular-wizard',
  'satellizer',
  'notyModule'
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
.config(  ['$stateProvider', '$urlRouterProvider',  'RestangularProvider', '$authProvider',
  function($stateProvider,    $urlRouterProvider,    RestangularProvider, $authProvider ) {

    // Redirects and Otherwise //
    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
    $urlRouterProvider
      // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
      // Here we are just setting up some convenience urls.
      .when('/tc?id', '/testcases/:id')
      .when('/tc/:id', '/testcases/:id')
      // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
      .otherwise('/');
    
    // Basic State Configurations
    // other states come from submodules 
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home.html'
        /*onEnter: function(){
          console.log('title')
        }
        onExit: function(title){
          if(title){ console.log(title) }
        }*/
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/login.html',
        controller: 'LoginController'
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutController'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/pages/signup.html',
        controller: 'SignupController'
      })
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

    /*
    $authProvider.google({
      clientId: ''
    });*/
    $authProvider.github({
      clientId: '3d495d811f39e0e888fd'
    });

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }

}]);
