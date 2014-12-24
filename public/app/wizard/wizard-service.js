'use strict';

angular.module('tmtServices')
  .factory('Wizard', function($resource) {
    return $resource(
	    "/api/v0/configure/:id", {id: '@id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })