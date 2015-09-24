'use strict';

angular.module('tmtServices')
  .factory('Builds', function($resource) {
    
    return $resource(
	    "/api/v0/duts/builds/:id", {id: '@id'},
	    {update: {method: "PUT"}}
    );
  })/*
  .factory('Testcase', function(Restangular) {
     var restAngular = 
      Restangular.withConfig(function(Configurer) {
        Configurer.setBaseUrl('/api/v0');
    });

    return restAngular.all('testcases');
  })*/