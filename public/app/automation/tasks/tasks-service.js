'use strict';

angular.module('tmtServices')
  .factory('Tasks', function($resource) {
    return $resource(
      "/api/v0/automation/tasks/:id", {id: '@_id'},
      {update: {method: "PUT", isArray: false}}
    );
  })