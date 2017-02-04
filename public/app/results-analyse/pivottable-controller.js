'use strict';

angular.module('OpenTMIControllers')
  .controller('pivottableController',
             ['$scope', 'Result', '$stateParams', '$location', '$log', 'noty', '$localStorage',
    function ( $scope,   Result,   $stateParams,   $location,   $log,   noty,   $localStorage) {

    $log.info('init pivottableController')
    $scope.results = [];

    if (!$localStorage.results) $localStorage.results = {}
    if (!$localStorage.results.pivottable) $localStorage.results.pivottable = {}

    let getExportView = function() {
      if($location.search().view) {
        return JSON.parse($location.search().view);
      }
    };
    if(getExportView()) {
      let view = getExportView();
      $log.debug("import view: ", view.name);
      $localStorage.results.pivottable[view.name] = view.cfg;
    };

    let getDefaultView = function() {
      let name = _.get(getExportView(), 'name', $scope.predefinedViews[0].name);
      $log.debug("default view: ", name);
      return name;
    };
    $scope.clearExport = function() {
      $location.search('view', undefined);
    };
    $scope.export = function() {
      let cfg = getConfig();
      let name = $scope.showNew?$scope.new_name:'custom';
      let view = JSON.stringify({name: name, cfg: cfg});
      $location.search('view', view);
    }
    $scope.save = function() {
       let cfg = getConfig();
       let name = $scope.showNew?$scope.new_name:'custom';
       if(name === 'custom') {
         $scope.predefinedViewSelection = name;
       }
       $localStorage.results.pivottable[name] = cfg;
       addPreset(name, cfg);
       $scope.showNew = false;
       $scope.clearExport();
    }
    $scope.remove = function() {
       let name = $scope.predefinedViewSelection;
       if($localStorage.results.pivottable[name]) {
         delete $localStorage.results.pivottable[name];
       }
       removePreset(name);
       $scope.clearExport();
    }
    $scope.restore = function() {
      _.each($localStorage.results.pivottable, (o, key) => {
         addPreset(key, o);
      });
    }

    $scope.noty = function(data){
      noty.noty({
          text: data.text,
          type: data.type || "success",
          timeout: data.timeout || 2000,
          maxVisible: data.maxVisible || 5,
          layout: data.layout || 'bottom'
      });
    };

    ZSchema.registerFormat("fillResult", function (obj) {
        obj['hello'] = "world";
        obj['Duration_bin10'] = 0
        obj['Week number'] = 0
        obj['campaign'] = ""
        obj['component'] = ""
        obj['cre.time'] = ""
        obj['day'] = "30"
        obj['day name'] = ""
        obj['duration'] = 0
        obj['exec.duration'] = 0
        obj['exec.dut.count'] = 0
        obj['exec.dut.type'] = ""
        obj['exec.dut.vendor'] =""
        obj['exec.env.framework.name'] = ""
        obj['exec.env.framework.ver'] = ""
        obj['exec.logs'] = ''
        obj['exec.note'] =
        obj['exec.sut.branch'] = ""
        obj['exec.sut.buildUrl'] = ""
        obj['exec.sut.commitId'] = ""
        obj['exec.sut.gitUrl'] = ""
        obj['exec.verdict'] = ""
        obj['feature'] =''
        obj['id'] = ""
        obj['job.id'] = ""
        obj['month'] = ""
        obj['month name'] = "Nov"
        obj['tcid'] = ""
        obj['year'] = ""
        return true;
    });
    var validator = new ZSchema();
    var resultSchema = {
        type: 'object',
        //format: 'fillResult',
        properties: {
            'exec.dut.count': {type: 'string'},
            'exec.sut.tag': {type: 'array', items: {type: 'string'}},
        }
    };
    $scope.predefinedViews = [
        {   name: 'Results vs features',
            cfg: {
                rows: ["component", "feature"],
                cols: ["year", "Week number", "exec.verdict"],
                rendererName: "Heatmap"
            }
        },
        {   name: 'Results vs Campaign',
            cfg: {
                rows: ["campaign"],
                cols: ["year", "Week number", "exec.verdict"],
                rendererName: "Heatmap"
            }
        },
        {   name: 'Results vs fw versions',
            cfg: {
                rows: ["exec.dut.model"],
                cols: ["year", "day", "exec.env.framework.ver", "exec.verdict"],
                rendererName: "Heatmap"
            }
        }
    ];

    let addPreset = function(name, cfg) {
      let o = _.find($scope.predefinedViews, {name: name})
      if(o) {
        o.cfg = cfg;
      } else {
        $scope.predefinedViews.push({
          name: name,
          cfg: cfg
        })
      }
    }
    let removePreset = function(name) {
      let o = _.find($scope.predefinedViews, {name: name});
      if(o) {
        $scope.predefinedViews.pop(o);
      }
    }

    $scope.restore();

    $scope.predefinedViewSelection = getDefaultView();
    $scope.resultsTo = new Date();
    $scope.resultsFrom = moment().subtract(3, 'weeks').toDate();
    $scope.limitCount = 1000;
    $scope.loading = false;

    var getViewConfigs = function(view) {
        var view = view || $scope.predefinedViewSelection;
        var predefineView = _.find($scope.predefinedViews, function(o){
            return view===o.name;});
        return predefineView.cfg;
    }
    $scope.selectView = function(view) {
        $scope.clearExport();
        let cfg = getViewConfigs(view);
        pivotUi(cfg);
    };
    $scope.delayedUpdate = function() {
        if($scope.loading)return;
        if($scope.timer) clearTimeout($scope.timer);
        $scope.timer = setTimeout($scope.update, 5000);
    };
    $scope.$watch(function(){ return $location.search() }, function(params){
        $scope.delayedUpdate();
    });

    function getConfig() {
      try {
        return JSON.parse(JSON.stringify($("#pivottable").data("pivotUIOptions")));
      } catch(e) {
        $log.warn(e);
        return getViewConfigs();
      }
    }
    $scope.update = function(configs) {
        if(!configs) {
            configs = getConfig();
        }
        $scope.loading = true;
        if($scope.timer) clearTimeout($scope.timer);
        $scope.noty({text: 'loading'});
        var q = {};
        q['cre.time'] = {
            $gte: $scope.resultsFrom,
            $lt: $scope.resultsTo
        };
        if([undefined, ''].indexOf($scope.limitByDutType) < 0 ) q['exec.dut.type'] = $scope.limitByDutType;
        else if(q['exec.dut.type']) delete q['exec.dut.type'];

        _.merge(q, _.omit($location.search(), ['view']));
        let req = {
            q: JSON.stringify(q),
            s: JSON.stringify({'cre.time': -1}),
            fl:true,
            l: $scope.limitCount
        };
        $log.info("Request: " ,req);

        Result.query(req).$promise.then(
          function(data){
            $scope.noty({text: "Loaded "+data.length+" results"});
            $scope.loading = false;
            var results = _.map(data, function(r) {

                r['exec.dut.count'] = ""+r['exec.dut.count'];
                r.duration = parseFloat(r.duration);
                var components = []
                var features = []
                for (var k of Object.keys(r)) {
                    if (k.match(/\.\d/) ){
                        if(k.match(/\.fut\.\d/)) {
                            features.push(r[k].toLowerCase());
                        }
                        if(k.match(/\.cut\.\d/)) {
                            components.push(r[k].toLowerCase());
                        }
                        delete r[k]
                    }
                }
                delete r['exec.sut.tag']
                delete r['exec.sut.cut']
                delete r['exec.sut.fut']
                r.component = components.sort().join(',')
                r.feature = features.sort().join(',')
                r.passrate = r['exec.verdict']==='pass'?100.0:0;
                /*if(r['exec.sut.fut.0']){
                    r['exec.sut.fut'] = r['exec.sut.fut.0']
                    delete r['exec.sut.fut.0']
                }
                if(r['exec.sut.cut.0']){
                    r['exec.sut.cut'] = r['exec.sut.cut.0']
                    delete r['exec.sut.cut.0']
                }
                if(r['exec.sut.cut.1']){
                    r['exec.sut.cut2'] = r['exec.sut.cut.1']
                    delete r['exec.sut.cut.1']
                }*/
                //var ok = validator.validate(r, resultSchema);
                //console.log(ok);
                return r;
            });
            $scope.results = results;
            pivotUi(configs);
        });
    };
    $scope.update(getViewConfigs());

    /**
     * Get week number in the year.
     * @param  {Integer} [weekStart=0]  First day of the week. 0-based. 0 for Sunday, 6 for Saturday.
     * @return {Integer}                0-based number of week.
     */
    Date.prototype.getWeek = function(weekStart) {
        var januaryFirst = new Date(this.getFullYear(), 0, 1);
        if(weekStart !== undefined && (typeof weekStart !== 'number' || weekStart % 1 !== 0 || weekStart < 0 || weekStart > 6)) {
          throw new Error('Wrong argument. Must be an integer between 0 and 6.');
        }
        weekStart = weekStart || 0;
        return Math.floor((((this - januaryFirst) / 86400000) + januaryFirst.getDay() - weekStart) / 7);
    };

    function pivotUi(cfg) {
        $log.debug(cfg);
        cfg = cfg || {};
        var derivers =    $.pivotUtilities.derivers;
        var dateFormat =  $.pivotUtilities.derivers.dateFormat;
        var sortAs =      $.pivotUtilities.sortAs;
        var tpl =         $.pivotUtilities.aggregatorTemplates;

        var rows = cfg.rows || ["component", "feature"];
        var cols = cfg.cols || ["year", "Week number", "exec.verdict"];
        var rendererName = cfg.rendererName || "Heatmap";

        var weeNumberDerivery = function(record) {
            var date;
            date = new Date(Date.parse(record['cre.time']));
            if (isNaN(date)) {
              return "";
            }
            return date.getWeek()
        }
        var latestAggregator = function(data, rowKey, colKey) {
              return {
                tmp: {},
                items: [],
                push: function(record) {
                    if( !tmp[ record.tcid ] ){
                        tmp[ record.tcid ] = {idx: items.length, time: record.cre.time }
                        this.items.push(record)
                    }
                    if( tmp[ record.tcid ].time < record.cre.time ) {
                        this.items[tmp[ record.tcid ].idx] = record
                        tmp[ record.tcid ] = {idx: items.length, time: record.cre.time }
                    }
                },
                value: function() { return this.items; },
                format: function(x) { return x; },
                label: "Latest Results"
             };
            };

        var renderers =   $.extend($.pivotUtilities.renderers,
                          $.pivotUtilities.c3_renderers,
                          $.pivotUtilities.export_renderers);
        $("#pivottable").pivotUI($scope.results, {
            rows: rows,
            cols: cols,
            rendererName: rendererName,
            renderers: renderers,
            derivedAttributes: {
                "year":       dateFormat("cre.time", "%y", true),
                "month":      dateFormat("cre.time", "%m", true),
                "day":        dateFormat("cre.time", "%d", true),
                "month name": dateFormat("cre.time", "%n", true),
                "day name":   dateFormat("cre.time", "%w", true),
                "Week number": weeNumberDerivery,
                "Duration_bin10": derivers.bin("exec.duration", 10),
                /*"Duration": function(record) {
                    duration = 0;
                    try {
                        duration = parseFloat(record.duration);
                    } catch (e) {

                    }
                    return duration;
                }*/
            },
            /*sorters: function(attr) {
                if(attr == "month name") {
                    return sortAs(["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);
                },
                if(attr == "day name") {
                    return sortAs(["Mon","Tue","Wed", "Thu","Fri","Sat","Sun"]);
                }
            },*/
            /*aggregators: {
                "Latest Results": latestAggregator()
            },*/
            hiddenAttributes: ["__v","_id._bsontype","_id.id" ,"exec.logs"],
            /*onRefresh: function(config) {
                var config_copy = JSON.parse(JSON.stringify(config));
            }*/

        }, true);
    }

  }])
  ;
