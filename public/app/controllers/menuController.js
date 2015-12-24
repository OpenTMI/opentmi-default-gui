'use strict';	

angular.module('OpenTMIControllers')
  .controller("MenuController", function($scope, $http, $auth) {
    //http://quarktheme.com/typography-icons/
    $scope.menus = [
      {
        title: "Test Management", tooltip: 'test', icon: 'cogs',
        menus: [
          { title: "Testcases", tooltip: 'test', action: "#/testcases" },
          { title: "Testcase Analyse", tooltip: 'test analyse', action: "#/testcases-analyse" },
          { title: "Testcase Tree", action: '#/testcases/tree'},
          { title: "Campaigns", tooltip: '', action: "#/campaigns" }
        ]
      },
      {
        title: "Test Automation", tooltip: 'test', icon: 'cogs',
        menus: [
          { title: "Plans", tooltip: 'Automation Plans', action: "#/automation/plans" },
          { title: "Jobs", tooltip: 'Generated Automation Jobs', action: "#/automation/jobs" },
          { title: "Schedule", tooltip: 'Jobs Schedule', action: "#/automation/jobs/schedule" },
          { title: "Configuration", tooltip: 'Scheduler Configuration', action: "#/automation/config" },
        ]
      },
      {
        title: 'SUT', tooltip: 'Software Under Test', icon: 'cogs',
        menus: [
          { title: "Modules", tooltip: 'Yotta Modules', action: "#/yotta#sal-stack-nanostack-eventloop"},
          { title: "Builds", action: "#/duts/builds" },
          { title: "Builds-Tree", action: "#/duts/builds/tree" }
        ]
      },
      {
        title: "DUT", tooltip: 'Device Under Test',
        menus: [
          { title: "Targets", action: "#/duts/targets"},
          { title: "Devices", action: "#/resources?type=dut" },
          //{ title: "Features", action: "#/duts/features" },
          //{ title: "Features Tree", action: "#/duts/features/tree" },
          //{ title: "Specifications", action: "#/duts/specifications" },
        ]
      },
      {
        title: "Resources", tooltip: 'Test rets',
        menus: [
          { title: "Resources", action: "#/resources" },
          { title: "Specifications", action: "#/specifications" },
          { title: "Features", action: "#/features" }
        ]
      },
      {
        title: "Results", tooltip: 'Test Results',
        menus: [
          { title: "Results", action: "#/results" },
          { title: "Analyse", action: "#/results-analyse" }
        ]
      },
      {
        title: "Reports", tooltip: 'Test Reports',
        menus: [
          { title: "Reports", action: "#/reports" },
          { title: "Templates", action: "#/reports/templates" }
        ]
      }
    ];
    
    $scope.cmenu = {
      title: "", tooltip: 'test', icon: 'cogs',
      menus: [
        {  title: "Accounts", tooltip: 'Manage Accounts', action: "#/accounts" },
        {  title: "Groups", action: "#/groups" },
        {  title: "Settings", action: "#/settings" },
        {  title: "Addons", action: "#/addons" },
      ]
    }

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    
  })
  .controller('MainController', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'General Purpose Test Management and automation framework';
  })
  .controller('ConfigController', function($scope) {
    $scope.message = 'There will be app configurations';
  })
  .controller('AboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
  })

  .controller('ContactController', function($scope, $http) {
    $scope.message = 'Jussi Vatjus-Anttila';
    $http({
      method: 'GET',
      url: 'https://api.github.com/repos/OpenTMI/opentmi-github/contributors'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.contributors = response.data;
    });
    
  });
 