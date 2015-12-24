'use strict';

angular.module('OpenTMIControllers')
  .controller('TasksController', 
             ['$scope', 'Task', '$stateParams', '$log', 
    function ($scope,   Task,   $stateParams,    $log) {

      $log.info('init TasksController')
    }
  ]);