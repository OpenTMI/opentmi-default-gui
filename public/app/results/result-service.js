'use strict';

angular.module('tmtServices')
  .factory('Result', function($resource) {
    
    return $resource(
	    "/api/v0/results/:id", {id: '@id'},
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