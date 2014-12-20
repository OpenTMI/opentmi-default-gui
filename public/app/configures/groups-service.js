'use strict';

angular.module('tmtServices')
  .factory('Groups', function($resource) {
    return $resource(
      "/api/v0/groups/:id", {id: '@_id'},
      {update: {method: "PUT", isArray: false}}
    );
  })