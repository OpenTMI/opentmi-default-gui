'use strict';

angular.module('OpenTMIControllers')
  .controller('BuildTreeController', 
             ['$scope', 'Builds', '$stateParams', '$log', '$window',
    function ($scope,    Builds,   $stateParams,   $log,   $window) {
  
    $log.info('init BuildTreeController');


     $scope.typesConfig = {
      "model": {
        "icon": "jstree-icon jstree-folder"
      },
      "configuration": {
        "icon": "jstree-icon jstree-folder"
      },
      "build": {
        "icon": "jstree-icon jstree-file"
      }
    };
     var onData = function (obj, cb) {
      console.log(obj);
      if( obj.id === '#' ) {
        loadModels(cb);
      } else if( obj.li_attr.type == 'model'){
        loadConfigurations(obj.li_attr.model, cb)
      } else if( obj.li_attr.type == 'configuration'){
        loadBuilds(obj.li_attr.model, obj.li_attr.configuration, cb)
      } else {
        console.warn("not supported", obj);
      }
    };
    $scope.treeModel = onData;

    $scope.contextmenuConfig = {
      items: function (node) {
        var items = {};
        console.log(node);
        switch (node.type) {
          case("build"):
            items['build'] = {
              "label": "Download",
              "action": function(data){
                var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                var url = 'api/v0/duts/builds/'+obj.li_attr.build._id+'/files/0/download';
                console.log(url)
                $window.open(url);
              }
            }
        }
        return items;
      }
    };

    var loadModels = function(cb){
      Builds.query({t: 'distinct', f: "target.hw.model"})
        .$promise.then(
        function(models) {
          var list =  []
          _.each( models, function(model){
            list.push({
              id: model,
              text: model,
              type: 'model',
              parent: "#",
              children: true,
              state : { "opened" : false },
              li_attr: {
                type: "model",
                model: model
              }})
          });
          list.push( {
              id: "unknown",
              text: "unknown",
              type: 'model',
              parent: "#",
              children: true,
              li_attr: {type: "model", model: ""} });
          cb(list);
        }
      )
    };

    var loadConfigurations = function(model, cb){
      var query = {
          t: 'distinct',
          f: "configuration.name"};
      if( model !== "" ){
        query["target.hw.model"] = model;
      } else {
        query["target.hw.model"] = "{empty}-";
        model= "unknown";
      }
      console.log(query);
      Builds.query(query)
      .$promise.then(
        function(configurations) {
          console.log(configurations);
          var list = [];
          _.each( configurations, function(configuration){
            console.log('configuration: '+configuration);
            var id = model+"/"+configuration;
            list.push( {
              id: id,
              parent: model,
              text: configuration,
              type: "configuration",
              children: true,
              li_attr: {
                type: "configuration",
                model: model,
                configuration: configuration}
            })
          });
          var id = model+"/unknown";
          console.log(id);

          list.push( {
            id: id,
            text: "unknown",
            type: "configuration",
            parent: model,
            children: true,
            li_attr: {
              type: "configuration",
              model: model,
              configuration: ""}
          });
          cb(list);
        }
      )
    };
    var loadBuilds = function(model, configuration, cb){
      var query = {
          //t: 'distinct',
          f: '_id configuration.name configuration.toolchain.name name',
          s: {'cre.time': -1} };
      if( model !== "" ){
        query["target.hw.model"] = model;
      } else {
        query["target.hw.model"] = "{empty}-";
        model = "unknown";
      }
      if( configuration !== "" ){
        query["configuration.name"] = configuration;
      } else {
        query["configuration.name"] = "{empty}-";
        configuration = "unknown";
      }

      Builds.query(query)
      .$promise.then(
        function(builds) {
          var list = [];
          _.each( builds, function(build){
            var parent = model+"/"+configuration;
            var id = build._id;
            list.push( {
              id: id,
              parent: parent,
              type: 'build',
              text: build.name,
              children: false,
              li_attr: {
                type: "build",
                build: build
              }
            })
          });
          cb(list);
        }
      )
    }
  }]);
