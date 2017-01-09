angular.module('OpenTMIControllers')
    .controller('BuildstatsController', ['$scope', 'Builds', '$stateParams', '$log',
        function($scope, Builds, $stateParams, $log) {

            $log.info('init BuildstatsController');
            $('.selectpicker').selectpicker({
                size: 10
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
                            if ($scope.data[0].values[d]) {
                                return $scope.data[0].values[d].label;
                            } else {
                                return '';
                            }

                        }
                    },
                    yAxis: {
                        axisLabel: 'b',
                    }
                },
                title: {
                    enable: true,
                    text: 'Build statistics'
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
                if (searchterm) {
                    return {
                        t: 'distinct',
                        q: JSON.stringify(q),
                        f: searchterm,
                        s: {
                            'cre.time': 1
                        }
                    };
                } else { // basicly used for full data fetch
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

            // this function gathers the data from mongodb and makes it
            // easy to nvd3 to read it.
            $scope.fetchData = function() {
                Builds.query($scope.createQuery())
                    .$promise.then(function(data) {
                        var heap = [],
                            stack = [],
                            total_flash = [],
                            total_ram = [],
                            static_ram = [];
                        $.each(data, function(key, value) {
                            // for some reason (didn't have time to check) I got
                            // some weird results using timestamp as a x-axis value
                            // So now it is just a running number (data order in query)
                            // and we use date as a label.
                            var labelString = d3.time.format('%d.%m')(new Date(value.cre.time));
                            heap.push({
                                x: key,
                                y: value.memory.summary.heap,
                                label: labelString
                            });

                            stack.push({
                                x: key,
                                y: value.memory.summary.stack,
                                label: labelString
                            });

                            total_flash.push({
                                x: key,
                                y: value.memory.summary.total_flash,
                                label: labelString
                            });

                            total_ram.push({
                                x: key,
                                y: value.memory.summary.total_ram,
                                label: labelString
                            });

                            static_ram.push({
                                x: key,
                                y: value.memory.summary.static_ram,
                                label: labelString
                            });
                        });
                        $scope.data = [{
                            key: 'Heap',
                            values: heap
                        }, {
                            key: 'stack',
                            values: stack
                        }, {
                            key: 'total_flash',
                            values: total_flash
                        }, {
                            key: 'total_ram',
                            values: total_ram
                        }, {
                            key: 'static_ram',
                            values: static_ram
                        }];
                    });
            };
        }
    ]);
