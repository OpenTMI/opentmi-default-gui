'use strict';

angular.module('tmtControllers')
  .controller('YottaTreeController', 
             ['$scope', 'Yotta', '$stateParams', '$log', '$location', 
    function ( $scope,   Yotta,   $stateParams,   $log, $location) {
  

    $log.info('init YottaTreeController')
    $scope.theModule = ""+$location.hash();

    $scope.moduleChange = function() {
      $scope.theModule = this.theModule;
      console.log("Module: "+$scope.theModule);
    }
    var onData = function (obj, cb) {
      console.log(obj);
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