'use strict';

angular.module('tmtControllers')
  .controller('TestcaseTreeController', 
             ['$scope', 'Testcase', '$stateParams', '$log', 
    function ( $scope,   Testcase,   $stateParams,   $log) {
  

    $log.info('init TestcaseTreeController')

    $scope.check_callback = true;
    var onData = function (obj, cb) {
      console.log(obj);
      if( obj.id === '#' ) {
        loadComponents(cb);
      }
      else if( obj.li_attr.type == 'component'){
        loadFeatures(obj.li_attr.component, cb)
      }
      else if( obj.li_attr.type == 'feature'){
        loadTestcases(obj.li_attr.component, obj.li_attr.feature, cb)
      } else {
        console.warn("not supported");
      }
    }
    $scope.treeModel =  onData; //{data: onData}
    $scope.typesConfig = {
      //"default": {
      //  "icon": "jstree-icon jstree-folder"
      //},
      "tc": {
        "icon": "jstree-icon jstree-file"
      }
    }
    $scope.counter = 0
    $scope.uniqueConfig = {
      'duplicate' : function (name, counter) {
        console.log('duplicate added')
        return name + '-' + $scope.counter;
      }
    }

    var loadComponents = function(cb){
      Testcase.query({t: 'distinct', f: "other_info.components"})
        .$promise.then( 
        function(components) {
          var list =  []
          _.each( components, function(component){
            list.push({
              id: component,
              text: component,
              parent: "#",
              children: true,
              state : { "opened" : false },
              li_attr: {
                type: "component", 
                component: component
              }})
          });
          list.push( {
              id: "unknown",
              text: "unknown",
              parent: "#",
              children: true,  
              li_attr: {type: "component", component: ""} })
          cb(list);
        }

      )
    }
    var loadFeatures = function(component, cb){
      var q = {}
      if( component !== "" ){
        q = {"other_info.components": component}
      } else {
        q= {"other_info.components": {$size: 0}}
      }
      Testcase.query({
          t: 'distinct', 
          f: "other_info.features", 
          q: JSON.stringify(q)})
      .$promise.then(
        function(features) {
          var list = []
          _.each( features, function(feature){
            console.log('component features: '+feature);
            var id = component+"/"+feature;
            list.push( {
              id: id, 
              parent: component, 
              text: feature,
              children: true,
              li_attr: { 
                type: "feature", 
                component: component, 
                feature: feature}
            })
          });
          list.push( {
            id: component+".",
            text: "unknown",
            parent: component,
            children: true,
            li_attr: {type: "feature", component: ""} })
          cb(list);
        }
      )
    }
    var loadTestcases = function(component, feature, cb){
      var q = {}
      if( component !== "" ){
        q = {"other_info.components": component}
      } else {
        q= {"other_info.components": {$size: 0}}
      }
      if( feature !== "" ){
        q = {"other_info.features": feature}
      } else {
        q= {"other_info.feature": {$size: 0}}
      }

      Testcase.query({
          t: 'distinct', 
          f: 'tcid', 
          s: {'tcid': -1}, 
          q: JSON.stringify(q)})
      .$promise.then(
        function(testcases) {
          var list = []
          _.each( testcases, function(testcase){
            var parent = component+"/"+feature;
            var id = component+"/"+feature+"/"+testcase;
            list.push( {
              id: id, 
              parent: parent, 
              type: 'tc',
              text: testcase,
              children: false,
              li_attr: { 
                type: "testcase", 
                component: component, 
                feature: feature,
                tcid: testcase
              }
            })
          });
          cb(list);
        }
      )
    }

    var showTcDetails = function(tcid){
        Testcase
            .query({q: {tcid: tcid}})
            .$promise.then( function(tcs){
                console.log(tcs);
                if( tcs.length === 1 ) {
                    var tc_info = tcs[0];
                    console.log(tc_info);
                    $scope.$root.$broadcast('tcStatus', tc_info);
                }
            });
    }

    $scope.select_node = function(e, data){
      if( data.node.type === "tc" ) {
        var tcid = data.node.li_attr.tcid;
        console.log(tcid);
        showTcDetails(tcid);
      }
    }

    
    /*$scope.contextMenu = {
                    "items": function () {
                        return {
                            "Create": {
                                "label": "Create",
                                "action": function (data) {
                                    var ref = $.jstree.reference(data.reference);
                                        sel = ref.get_selected();
                                    if(!sel.length) { return false; }
                                    sel = sel[0];
                                    sel = ref.create_node(sel, {"type":"file"});
                                    if(sel) {
                                        ref.edit(sel);
                                    }

                                }
                            },
                            "Rename": {
                                "label": "Rename",
                                "action": function (data) {
                                    var inst = $.jstree.reference(data.reference);
                                        obj = inst.get_node(data.reference);
                                    inst.edit(obj);
                                }
                            },
                            "Delete": {
                                "label": "Delete",
                                "action": function (data) {
                                    var ref = $.jstree.reference(data.reference),
                                        sel = ref.get_selected();
                                    if(!sel.length) { return false; }
                                    ref.delete_node(sel);

                                }
                            }
                        };
                    }
                };*/
  }])
;