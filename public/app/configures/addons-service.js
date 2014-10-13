'use strict';

angular.module('tmtServices')
  .factory('Addons', function($resource) {
    return $resource(
	    "/api/v0/addons/:id", {id: '@_id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })