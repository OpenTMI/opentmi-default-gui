'use strict';

angular.module('tmtControllers')
  .controller('TestcaseTreeController', 
             ['$scope', 'Testcase', '$stateParams', '$log', 
    function ( $scope,   Testcase,   $stateParams,   $log) {
  

    $log.info('init TestcaseTreeController')

    $scope.typesConfig = {
      /*"default": {
        "icon": "jstree-icon jstree-folder"
      },*/
      "tc": {
        "icon": "jstree-icon jstree-file"
      }
    }
    $scope.treeModel = [];



    var addNode = function(node){
      $scope.treeModel.push(node);
    }
    var clearTree = function(){ $scope.treeModel = []; }

    addNode({
      id: 'bluetooth',
      parent: '#',
      text: 'Bluetooth'
    });
    

    var ListOfTcs = []

    var doRest = function(listOfTcs, component){
      if( component ) {
        Testcase.query({t: 'distinct', f: 'tcid', s: {'tcid': -1}, 
            q: { 
              'other_info.components': component, 
              'tcid': { $nin: [ listOfTcs ] }
            }
        }).$promise.then( function(tcs){
          _.each(tcs, doTc(component, ''));
        });
      } else {
        addNode({
          id: '.uncategory',
          parent: '#',
          text: 'Unknown'
        });
        Testcase.query({t: 'distinct', f: 'tcid', s: {'tcid': -1}, 
            q: { 'tcid': { $nin: [ listOfTcs] } }
        }).$promise.then( function(tcs){
          _.each(tcs, doTc('', 'uncategory', true));
        });
      }
    }

    var doTc = function(component, feature, rest){
      return function(tc){
        if(!rest)ListOfTcs.push(tc);
        var parent = component;
        if( feature ) parent += '.'+feature;
        addNode({
          id: parent+'.'+tc,
          parent: parent,
          text: tc,
          type: "tc"
        });
      }
    }
    var doFeature = function(component){
      return function(feature) {
        addNode({
          id: component+'.'+feature,
          parent: component,
          text: feature,
        });
        Testcase.query({t: 'distinct', f: 'tcid', 
          q: { 
            $and: [ 
              {'other_info.components': component}, 
              {'other_info.features': feature} 
            ]
          }})
        .$promise.then( function(tcs){
          _.each(tcs, doTc(component, feature));
          doRest(tcs, component);
        });
      }
    }
    var doComponent = function(component){
      addNode({
        id: component,
        parent: '#',
        text: component,
      });
      Testcase.query({t: 'distinct', f: "other_info.features", q: {'other_info.components': component}})
      .$promise.then( function(features){
        _.each(features, doFeature(component) );
      });
    }

    Testcase.query({t: 'distinct', f: "other_info.components"}).$promise.then( 
      function(components) {
        _.each( components, doComponent );
        doRest(ListOfTcs)
      }
    );
  }])
;