'use strict';

angular.module('tmtServices')
  .factory('Addon', function($resource) {
    return $resource(
	    "/api/v0/addons/:id", {id: '@_id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })