angular.module('OpenTMI.tasks', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('tasks', {
          url: '/automation/tasks',
          templateUrl: 'app/tasks/tasks.list.html',
          controller: 'TasksController'
        })
      }
  ]
);