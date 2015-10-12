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
      if( node.text !== '' ) {
        $scope.treeModel.push(node);
      }
    }
    var clearTree = function(){ $scope.treeModel = []; }
    var ListOfTcs = [];
    var listOfComponents = [];
    var listOfFeatures = [];

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
            q: { 
                $and: [
                {'other_info.components': 
                    { $nin: [listOfComponents] } },
                {'other_info.features':
                    { $nin: [listOfFeatures] } }
                ]
            }
        }).$promise.then( function(tcs){
          _.each(tcs, doTc('', 'uncategory', true));
        });
      }
    }

    var doTc = function(component, feature, rest){
      return function(tc){
        if(!rest){
            ListOfTcs.push(tc);
        }
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
    var doFeature = function(component, cb){
      return function(feature) {
        listOfFeatures.push(feature);
        addNode({
          id: component+'.'+feature,
          parent: component,
          text: feature,
        });
        var _doTc = doTc(component, feature);
        Testcase.query({t: 'distinct', f: 'tcid', 
          q: { 
            $and: [ 
              {'other_info.components': component}, 
              {'other_info.features': feature} 
            ]
          }})
        .$promise.then( function(tcs){
          _.each(tcs, _doTc);
          cb();
        });
      }
    }
    var doComponent = function(component){
      listOfComponents.push(component)
      addNode({
        id: component,
        parent: '#',
        text: component,
      });
      Testcase.query({t: 'distinct', f: "other_info.features", q: {'other_info.components': component}})
      .$promise.then( function(features){
        var len = features.length;
        _.each(features, doFeature(component, function(){
            /*len--;
            if( len == 0 ) {
                console.log('doRest');
                console.log(ListOfTcs);
                doRest(ListOfTcs, component);
            }*/
        }));
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