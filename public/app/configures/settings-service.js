'use strict';

angular.module('tmtServices')
  .factory('Settings', function($resource) {
    return $resource(
      "/api/v0/settings/:id", {id: '@_id'},
      {update: {method: "PUT", isArray: false}}
    );
  })