'use strict';

angular.module('tmtServices')
  .factory('Campaign', function($resource) {
    return $resource(
	    "/api/v0/campaigns/:id", {id: '@_id'},
	    {update: {method: "PUT", isArray: false}}
    );
  })