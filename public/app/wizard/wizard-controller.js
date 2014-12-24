'use strict';

angular.module('tmtControllers')
  .controller('WizardController', 
             ['$scope', 'Wizard', '$stateParams', '$log', 'WizardHandler',
    function ($scope,  Wizard,  $stateParams,    $log, WizardHandler) {
  
    $log.info('init WizardController')


    $scope.database = {
      host: 'localhost',
      port: 32670,
      uname: '',
      pwd: ''
    }
    
    $scope.finishedWizard = function() {
        console.log("Wizard finished :)");
    }

    $scope.logStep = function() {
        console.log("Wizard-step continued");
    }
    
    $scope.goBack = function() {
        WizardHandler.wizard().goTo(0);
    }

  }]);