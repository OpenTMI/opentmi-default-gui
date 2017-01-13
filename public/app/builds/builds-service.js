'use strict';

angular.module('tmtServices')
  .factory('Builds', function($resource) {
    
    return $resource(
	    "/api/v0/duts/builds/:_id", {_id: '@id'},
	    {update: {method: "PUT"}}
    );
  })
