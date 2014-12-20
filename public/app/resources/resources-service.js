'use strict';

angular.module('tmtServices')
  .factory('Resource', function($resource) {
    return $resource(
	    "/api/v0/resources/:id", {id: '@_id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })