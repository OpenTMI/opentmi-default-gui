'use strict';

angular.module('tmtServices')
  .factory('Yotta', function($resource) {
    return $resource(
        "https://registry.yottabuild.org/modules/:module", 
        {module: '@id'}
    );
  })