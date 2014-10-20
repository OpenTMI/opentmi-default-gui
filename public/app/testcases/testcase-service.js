'use strict';

angular.module('tmtServices')
  .factory('Testcase', function($resource) {
    
    return $resource(
	    "/api/v0/testcases/:id", {id: '@id'},
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