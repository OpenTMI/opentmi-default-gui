'use strict';

angular.module('tmtServices')
  .factory('Account', function($resource) {
    return $resource(
	    "/api/v0/accounts/:id", {id: '@_id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })