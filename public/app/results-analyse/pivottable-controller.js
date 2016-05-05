'use strict';

angular.module('OpenTMIControllers')
  .controller('pivottableController', 
             ['$scope', 'Result', '$stateParams', '$log', 'noty',
    function ($scope,   Result,   $stateParams,    $log, noty) {
  
    $log.info('init pivottableController')
    $scope.results = [];

    $scope.noty = function(data){
      console.log(data);
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
    }
    $scope.loading = false;
    $scope.update = function() {
        $scope.loading = true;
        $scope.noty({text: 'loading'});
        Result.query({q: JSON.stringify({}), s: {'cre.time': -1}, fl:true, l: 10000}).$promise.then( 
          function(data){
            $scope.noty({text: 'ready'});
            $scope.loading = false;
            var results = _.map(data, function(r) {
                r['exec.dut.count'] = ""+r['exec.dut.count'];
                r.duration = parseFloat(r.duration);
                var components = []
                var features = []
                for (var k of Object.keys(r)) {
                    if (k.match(/\.\d/) ){
                        if(k.match(/\.fut\.\d/)) {
                            features.push(r[k]);
                        }
                        if(k.match(/\.cut\.\d/)) {
                            components.push(r[k])
                        }
                        delete r[k]
                    }
                }
                delete r['exec.sut.tag']
                delete r['exec.sut.cut']
                delete r['exec.sut.fut']
                r.component = components.join(',')
                r.feature = features.join(',')
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
            console.log(results);
            $scope.results = results;
            pivotUi()
        });
    }
    $scope.update();

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


    
    function pivotUi() {
        var derivers =    $.pivotUtilities.derivers;
        var dateFormat =  $.pivotUtilities.derivers.dateFormat;
        var sortAs =      $.pivotUtilities.sortAs;
        var tpl =         $.pivotUtilities.aggregatorTemplates;
        
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
            rows: ["component", "feature"],
            cols: ["year", "Week number", "exec.verdict"],
            rendererName: "Heatmap",
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
            onRefresh: function(config) {
                var config_copy = JSON.parse(JSON.stringify(config));
            }

        });
    }
    
  }])
  ;
