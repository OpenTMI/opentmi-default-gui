'use strict';	

angular.module('tmtControllers')
  .controller("MenuController", function($scope, $http) {
    //http://quarktheme.com/typography-icons/
    $scope.menus = [
    {
      title: "Test Management", tooltip: 'test', icon: 'cogs',
      menus: [
        {  title: "Testcases", tooltip: 'test', action: "#/testcases" },
        {  title: "Testcase Analyse", tooltip: 'test analyse', action: "#/testcases-analyse" },
        {  title: "Testcase Tree", action: '#/testcases/tree'},
        {  title: "Campaigns", tooltip: '', action: "#/campaigns" },
        {  title: "Plans", tooltip: '', action: "#/plans" },
        {  title: "Automation", tooltip: '', action: "#/automation" },
        {  title: "Yotta", tooltip: '', action: "#/yotta#sal-stack-nanostack-eventloop" }
        /*{
          title: "Submenu 1b",
          action: "moreStuff",
          menus: [
            {
              title: "Submenu 1b 1",
              action: "stuff"
            },
            {
              title: "Submenu 1b 2",
              action: "moreStuff"
            }
          ]
        }*/
      ]
    },
    {
      title: "DUT", tooltip: 'Device Under Test',
      menus: [
        { title: "Devices", action: "#/resources?type=dut" },
        { title: "Features", action: "#/duts/features" },
        { title: "Features Tree", action: "#/duts/features/tree" },
        { title: "Specifications", action: "#/duts/specifications" },
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
      title: "Builds", tooltip: 'Build informations',
      menus: [
        { title: "Builds", action: "#/duts/builds" },
        { title: "Tree", action: "#/duts/builds/tree" }
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

  .controller('ContactController', function($scope) {
    $scope.message = 'Jussi Vatjus-Anttila';
  });
 