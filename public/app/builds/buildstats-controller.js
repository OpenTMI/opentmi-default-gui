angular.module('OpenTMIControllers')
    .controller('BuildstatsController', ['$scope', 'Builds', '$stateParams', '$log',
        function($scope, Builds, $stateParams, $log) {

            $log.info('init BuildstatsController');
            $('.selectpicker').selectpicker({
                size: 10
            });

            var downloadFile = function(uri, fileName) {
                //Initialize file format you want csv or xls
                //var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

                //this trick will generate a temp <a /> tag
                var link = document.createElement("a");
                link.href = uri;
                link.target = '_new';

                //set the visibility hidden so it will not effect on your web-layout
                link.style = "visibility:hidden";
                link.download = fileName;

                //this part will append the anchor tag and remove it after automatic click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            $('input[name="daterange"]').daterangepicker({
                "drops": "up",
                "autoApply": true,
                "locale": {
                    "format": "DD.MM.YYYY",
                    "separator": " - ",
                    "firstDay": 1
                },
                "startDate": moment().subtract(4, 'days').format('DD.MM.YYYY'),
                "endDate": moment().format('DD.MM.YYYY')
            });
            // Setup the chart
            $scope.options = {
                chart: {
                    type: 'lineChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 55,
                        bottom: 60,
                        left: 65
                    },
                    x: function(d) {
                        return d.x;
                    },
                    y: function(d) {
                        return d.y;
                    },
                    useInteractiveGuideline: true,
                    xAxis: {
                        axisLabel: 'Date',
                        tickFormat: function(d) {
                            return _.get($scope.data, '0.values.' + d+'.label', '');
                        }
                    },
                    yAxis: {
                        axisLabel: 'bytes',
                    },
                    lines: {
                        dispatch: {
                            elementClick: function(e) {
                                var filename = 'build.bin';
                                if ($('#binaries').find('option:selected').val()) {
                                    filename = $('#binaries').find('option:selected').val();
                                }
                                downloadFile('/api/v0/duts/builds/' + e[0].point.id + '/files/0/download', filename, 'application/octet-stream');
                            }
                        }
                    }
                },
                title: {
                    enable: true,
                    text: 'Build statistics'
                },
                subtitle: {
                    enable: true,
                    html: 'You can download build binary by hovering your mouse on chart and clicking.',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px',
                        'font-size': '10px',
                    }
                }
            };
            $scope.data = [];
            $scope.targethwmodel = '';
            $scope.branch = '';
            $scope.configname = '';
            $scope.toolchain = '';

            // function to fill dropdown/selectbox from database
            $scope.populateSelectbox = function(data, selectbox) {
                $(selectbox).html('');
                $(selectbox)
                    .append($('<option></option>')
                        .attr('value', '')
                        .text('Select value'));
                $.each(data, function(key, value) {
                    $(selectbox)
                        .append($('<option></option>')
                            .attr('value', value)
                            .text(value));
                });
                $(selectbox).selectpicker('refresh');
            };

            // function to create Queries for mongodb based on
            // already selected values and searchterm
            $scope.createQuery = function(searchterm) {
                var q = {};
                if ($('#hardwares').find('option:selected').val()) {
                    q['target.hw.model'] = $('#hardwares').find('option:selected').val();
                }
                if ($('#branches').find('option:selected').val()) {
                    q['vcs.branch'] = $('#branches').find('option:selected').val();
                }
                if ($('#confnames').find('option:selected').val()) {
                    q['configuration.name'] = $('#confnames').find('option:selected').val();
                }
                if ($('#toolchains').find('option:selected').val()) {
                    q['configuration.toolchain.name'] = $('#toolchains').find('option:selected').val();
                }
                if ($('#binaries').find('option:selected').val()) {
                    q['files.name'] = $('#binaries').find('option:selected').val();
                }
                if (searchterm) {
                    return {
                        t: 'distinct',
                        q: JSON.stringify(q),
                        f: searchterm,
                        s: {
                            'cre.time': 1
                        }
                    };
                } else { // basicly used for chart data fetch
                    q['cre.time'] = {
                        $gte: moment($('#daterange').data('daterangepicker').startDate).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS'),
                        $lt: moment($('#daterange').data('daterangepicker').endDate).endOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS')
                    };
                    return {
                        q: JSON.stringify(q),
                        s: {
                            'cre.time': 1
                        }
                    };
                }

            };

            // when dropdown is shown on selectbox -> fetch data and populate list
            $('#hardwares').on('show.bs.select', function(e) {
                $(this).selectpicker('val', '');
                Builds.query($scope.createQuery('target.hw.model'))
                    .$promise.then(function(hardwares) {
                        $scope.populateSelectbox(hardwares, $('#hardwares'));
                    });
            });

            $('#branches').on('show.bs.select', function(e) {
                $(this).selectpicker('val', '');
                Builds.query($scope.createQuery('vcs.branch'))
                    .$promise.then(function(branches) {
                        $scope.populateSelectbox(branches, $('#branches'));
                    });
            });

            $('#confnames').on('show.bs.select', function(e) {
                $(this).selectpicker('val', '');
                Builds.query($scope.createQuery('configuration.name'))
                    .$promise.then(function(confnames) {
                        $scope.populateSelectbox(confnames, $('#confnames'));
                    });
            });

            $('#toolchains').on('show.bs.select', function(e) {
                $(this).selectpicker('val', '');
                Builds.query($scope.createQuery('configuration.toolchain.name'))
                    .$promise.then(function(toolchains) {
                        $scope.populateSelectbox(toolchains, $('#toolchains'));
                    });
            });

            $('#binaries').on('show.bs.select', function(e) {
                $(this).selectpicker('val', '');
                Builds.query($scope.createQuery('files.name'))
                    .$promise.then(function(binary) {
                        $scope.populateSelectbox(binary, $('#binaries'));
                    });
            });
            // fetch data when daterange is changed
            $('#daterange').on('apply.daterangepicker', function(ev, picker) {
                $scope.fetchData();
            });
            // this function gathers the data from mongodb and makes it
            // easy to nvd3 to read it.
            $scope.fetchData = function() {
                $(".loader").show();
                $("#drSelection").show();

                Builds.query($scope.createQuery())
                    .$promise.then(function(data) {
                        $scope.data = [];
                        $.each(data, function(key, value) {
                            var labelString = d3.time.format('%d.%m %H:%M')(new Date(value.cre.time));
                            for (var i = 0; i < Object.keys(value.memory.summary).length; i++) {
                                if ($scope.data.some(function(el) {
                                        return el.key == Object.keys(value.memory.summary)[i];
                                    })) {
                                    for (var x = 0; x < $scope.data.length; x++) {
                                        if ($scope.data[x].key == Object.keys(value.memory.summary)[i]) {
                                            $scope.data[x].values.push({
                                                x: key,
                                                y: value.memory.summary[Object.keys(value.memory.summary)[i]],
                                                label: labelString,
                                                id: value._id
                                            });
                                        }
                                    }
                                } else {
                                    var tmp = {};
                                    tmp.key = Object.keys(value.memory.summary)[i];
                                    tmp.values = [{
                                        x: key,
                                        y: value.memory.summary[Object.keys(value.memory.summary)[i]],
                                        label: labelString,
                                        id: value._id
                                    }];

                                    $scope.data.push(tmp);
                                }
                            }
                        });
                        $(".loader").hide();
                    });
            };
        }
    ]);
