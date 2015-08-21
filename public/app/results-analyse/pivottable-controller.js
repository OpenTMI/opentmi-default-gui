'use strict';

angular.module('tmtControllers')
  .controller('pivottableController', 
             ['$scope', 'Result', '$stateParams', '$log',
    function ($scope,   Result,   $stateParams,    $log) {
  
    $log.info('init pivottableController')
    $scope.results = [];
    
    $scope.update = function() {
        Result.query({q: JSON.stringify({}), fl:true}).$promise.then( 
          function(results){
            $log.info(results)
            
            for(var r of results) {
                r['exec.dut.count'] = ""+r['exec.dut.count'];
                r.duration = parseFloat(r.duration);
                if(r['exec.sut.fut.0']){
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
                }
            }
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

        var renderers =   $.extend($.pivotUtilities.renderers, 
                          $.pivotUtilities.c3_renderers,
                          $.pivotUtilities.export_renderers);
        $("#pivottable").pivotUI($scope.results, {
            rows: ["tcid"],
            cols: ["exec.verdict"],
            rendererName: "Table",
            renderers: renderers,
            derivedAttributes: {
                "year":       dateFormat("cre.time", "%y", true),
                "month":      dateFormat("cre.time", "%m", true),
                "day":        dateFormat("cre.time", "%d", true),
                "month name": dateFormat("cre.time", "%n", true),
                "day name":   dateFormat("cre.time", "%w", true),
                "Week number": function(record) {
                    var date;
                    date = new Date(Date.parse(record['cre.time']));
                    if (isNaN(date)) {
                      return "";
                    }
                    return date.getWeek()
                  },
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
            hiddenAttributes: ["__v","_id._bsontype","_id.id" ,"exec.logs"],

        });
    }
    
  }])
  ;