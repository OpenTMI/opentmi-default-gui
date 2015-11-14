'use strict';

angular.module('tmtControllers')
  .controller('TasksController', 
             ['$scope', 'Task', '$stateParams', '$log', 
    function ($scope,   Task,   $stateParams,    $log) {

      $log.info('init TasksController')
    }
  ]);