'use strict';

angular.module('tmtControllers')
  .controller('TestcaseTreeController', 
             ['$scope', 'Testcase', '$stateParams', '$log', '$location', 
    function ( $scope,   Testcase,   $stateParams,   $log, $location) {
  

    $log.info('init TestcaseTreeController')

    $scope.check_callback = true;
    var onData = function (obj, cb) {
      console.log(obj);
      if( obj.id === '#' ) {
        loadComponents(cb);
      } else if( obj.type == 'component'){
        loadFeatures(obj.li_attr.component, cb)
      } else if( obj.type == 'feature'){
        loadTestcases(obj.li_attr.component, obj.li_attr.feature, cb)
      } else {
        console.warn("not supported");
      }
    }
    $scope.coreConfig = {
      multiple: false,
      check_callback: function (operation, node, node_parent, node_position, more) {
          // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
          // in case of 'rename_node' node_position is filled with the new node name
          var allowed = operation === 'rename_node' ? true : false;
          console.log(operation+" is "+(allowed?"allowed":"denied"));
          return allowed;
      } 
    };
    $scope.treeModel =  onData; //{data: onData}
    $scope.typesConfig = {
      //"default": {
      //  "icon": "jstree-icon jstree-folder"
      //},
      "component": {
        "icon": "jstree-icon jstree-folder"
      },
      "feature": {
        "icon": "jstree-icon jstree-folder"
      },
      "tc": {
        "icon": "jstree-icon jstree-file"
      }
    }
    $scope.contextmenuConfig = {
      items: function(node){
        var items = {};
        switch(node.type){
          case("component"):
          case("feature"):
            items["rename"] = {
              "label": "Rename",
              "action": function (data) {
                  var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                  inst.edit(obj);
              }
            }
            break;
          case("tc"):
            items['tc'] = {
              "label": "Open",
              "action": function(data){
                var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                var new_path = '/testcases/'+obj.li_attr.tcid;
                console.log(new_path)
                $location.path(new_path);
              }
            }
            items["rename"] = {
              "label": "Rename",
              "action": function (data) {
                  var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                  inst.edit(obj);
              }
            }
            items["campaign"] = {
              "label": "Campaign",
              "separator_before": true,
              "submenu": {
                "Add": {
                  "label": "Add to existing campaign",
                }
              }
            }
            
          default:
            break;
        }
        /*
        items = { 
          "new": {
              "label": "Create",
              "action": function (data) {
                  var ref = $.jstree.reference(data.reference),
                      sel = ref.get_selected();
                  if(!sel.length) { return false; }
                  sel = sel[0];
                  sel = ref.create_node(sel, {"type":"file"});
                  if(sel) {
                      ref.edit(sel);
                  }

              }
          },
          "rename": {
              "label": "Rename",
              "action": function (data) {
                  var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                  inst.edit(obj);
              }
          },
          "delete": {
              "label": "Delete",
              "action": function (data) {
                  var ref = $.jstree.reference(data.reference),
                      sel = ref.get_selected();
                  if(!sel.length) { return false; }
                  ref.delete_node(sel);

              }
          }
        }*/
        return items;
      }
    };
    $scope.counter = 0
    $scope.uniqueConfig = {
      'duplicate' : function (name, counter) {
        console.log('duplicate added')
        return name + '-' + $scope.counter;
      }
    }

    $scope.searchConfig = {}
    /*
    $scope.bind("move_node.jstree", function (e, data) {
      if(data.rslt.ot != data.rslt.rt) {
        console.log("Node was moved to a different tree-instance");
      }
      else {
        console.log("Node was moved inside the same tree-instance");
      }
    });*/

    var loadComponents = function(cb){
      Testcase.query({t: 'distinct', f: "other_info.components"})
        .$promise.then( 
        function(components) {
          var list =  []
          _.each( components, function(component){
            list.push({
              id: component,
              text: component,
              type: 'component',
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
              type: 'component',
              parent: "#",
              children: true,  
              li_attr: {type: "component", component: ""} })
          cb(list);
        }

      )
    }
    var loadFeatures = function(component, cb){
      var query = {
          t: 'distinct', 
          f: "other_info.features"}
      if( component !== "" ){
        query["other_info.components"] = component;
      } else {
        query["other_info.components"] = "{size}0";
        component = "unknown";
      }
      console.log(query);
      Testcase.query(query)
      .$promise.then(
        function(features) {
          console.log(features);
          var list = []
          _.each( features, function(feature){
            console.log('component features: '+feature);
            var id = component+"/"+feature;
            list.push( {
              id: id, 
              parent: component, 
              text: feature,
              type: "feature",
              children: true,
              li_attr: { 
                type: "feature", 
                component: component, 
                feature: feature}
            })
          });
          var id = component+"/unknown"
          console.log(id);
          
          list.push( {
            id: id,
            text: "unknown",
            type: "feature",
            parent: component,
            children: true,
            li_attr: {
              type: "feature", 
              component: component,
              feature: ""} 
          })
          cb(list);
        }
      )
    }
    var loadTestcases = function(component, feature, cb){
      var query = {
          t: 'distinct', 
          f: 'tcid', 
          s: {'tcid': -1} }
      if( component !== "" ){
        query["other_info.components"] = component;
      } else {
        query["other_info.components"] = "{size}0";
        component = "unknown";
      }
      if( feature !== "" ){
        query["other_info.features"] = feature;
      } else {
        query["other_info.features"] = "{size}0";
        feature = "unknown";
      }

      Testcase.query(query)
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

    
    var showComponentDetails = function(component){
      Testcase
        .query({
          q: {'other_info.components': component} })
          .$promise.then( function(tcs){
              $scope.$root.$broadcast('tcStatus', {
                component: component,
                count: tcs.length});
          });
    }
    var showFeatureDetails = function(component, feature){
      Testcase
        .query({
          q: {
            'other_info.components': component,
            'other_info.features': feature }})
          .$promise.then( function(tcs){
              $scope.$root.$broadcast('tcStatus', {
                component: component,
                feature: feature,
                count: tcs.length
              });
          });
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
      switch( data.node.type ) {
        case("tc"):
          var tcid = data.node.li_attr.tcid;
          console.log('show TC details: '+tcid);
          showTcDetails(tcid);
          break;
        case("component"):
          var component = data.node.li_attr.component;
          console.log("show component details: "+component);
          showComponentDetails(component);
          break;
        case("feature"):
          var component = data.node.li_attr.component;
          var feature = data.node.li_attr.feature;
          console.log("show feature details: "+component+":"+feature);
          showFeatureDetails(component, feature);
          break;
        default:
          console.warn("not supported type");
      }
    }
    $scope.search = function(nodes, str, res){
      console.log(str.str);
    }

    $scope.$on('tcFilter', function(event, data) {
      console.log("tcFilter event");
      var tree = angular.element(document.querySelector('#tcDir'));
      
      var q = {}
      data.tags.forEach( function(tag){
        console.log(tag);
        console.log($scope);
        //$scope
      });
    });
  }])
;