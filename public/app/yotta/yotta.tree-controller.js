'use strict';

angular.module('tmtControllers')
  .controller('YottaTreeController', 
             ['$scope', '$http', 'Yotta', '$stateParams', '$log', '$location', 
    function ( $scope,   $http,   Yotta,   $stateParams,   $log, $location) {
  

    $log.info('init YottaTreeController')
    $scope.theModule = ""+$location.hash();

    function fetchPackagesFromGithub(cb){
      $http({
        method: 'GET',
        url: '/github/yotta'
      }).then(function successCallback(response){
        for(var i=0;i<response.data.length;i++){
          response.data[i].type = 'module';
        }
        cb(response.data);
      })
    }
    function fetchPackages(cb){
      var registry = [];
      var page = 0;
      var pageSize = 100;
      function getNext(cb){
        var skip = page*pageSize;
        var limit = pageSize;
        $http({
          method: 'GET',
          url: 'https://registry.yottabuild.org/search?skip='+skip
        }).then(function successCallback(response) {
          cb(null, response.data, response.data.length === pageSize);
        }, function errorCallback(response) {
          cb(response);
        });
      }

      function gotPage(err, data, moreAvailable){
        if(err){ 
          $log.error(err);
          return;
        }
        $log.info("Got 100 modules more..");
        page++;
        $.merge(registry, data);
        if(moreAvailable){ 
          getNext( gotPage );
        } else {
          console.log("Got last "+data.length+" module");
          cb(registry)
        }
      }
      getNext( gotPage );
    }
    function doTreeChart(registry){

      var target = new Object({ name: 'module', id: 'module',
              description: 'Modules', children: [] });
      var module = new Object({ name: 'target', id: 'target', 
              description: 'Targets', children: [] });
    
      var types = {}
      types['module'] = module;
      types['target'] = target;

      $log.debug("generate chart..");
      _.each(registry, function(reg){
        var child = {
          name: reg.name,
          id: reg.name,
          description: reg.description || reg.name,
        };

        if( reg.type === 'module' ){
          if( reg.dependencies ){
            var keys = Object.keys(reg.dependencies);
            child.children = _.map(keys, function(dep){
              return {name: dep, id: dep}
            })
          }
          types[reg.type].children.push(child);
        }
      });
      $scope.data = {
          name: 'ROOT', id: 'root', children: [module, target]
      };
      console.log("Modules in Yotta: "+types.module.children.length);
    }
    
    //fetchPackages( doTreeChart );
    fetchPackagesFromGithub( doTreeChart );

    $scope.moduleChange = function() {
      $scope.theModule = this.theModule;
      console.log("Module: "+$scope.theModule);
    }
    var onData = function (obj, cb) {
      //console.log(obj);
      if( obj.parent == null) {
          loadModule("#", $scope.theModule, cb);
      }
      else {
        loadModule(obj.id, obj.li_attr.module, cb);
      }
    }
    $scope.coreConfig = {
      multiple: false 
    };
    $scope.treeModel = onData;
    var loadModule = function(parent_id, module_name, cb) {
        console.log("Loading module: "+module_name);
        Yotta.get({module: module_name})
            .$promise.then( 
            function(module) {
                console.log(module);
                var list =  []
                if( parent_id === "#" ) {
                    list.push({
                      id: module_name,
                      text: module_name,
                      parent: parent_id,
                      children: true,
                      state : { "opened" : false },
                      li_attr: {
                        module: module.latest.name,
                        version: module.latest.version
                      }
                    })
                    cb(list);
                    return;
                }
                _.each( module.latest.dependencies, function(value, key){
                    var id = parent_id+"." + module_name+"."+key
                    list.push({
                      id: id,
                      text: key,
                      parent: parent_id,
                      children: true,
                      state : { "opened" : false },
                      li_attr: {
                        module: key,
                        version: value
                      }})
                  });
                  cb(list);
            });
    }
  }])
;