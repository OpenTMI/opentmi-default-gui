'use strict';

angular.module('tmtServices')
  .factory('Yotta', function($resource) {
    
    return $resource(
        "https://registry.yottabuild.org/modules/:module", {module: '@id'}
    );
  })/*
  .factory('Testcase', function(Restangular) {
     var restAngular = 
      Restangular.withConfig(function(Configurer) {
        Configurer.setBaseUrl('/api/v0');
    });

    return restAngular.all('testcases');
  })*/