angular.module('OpenTMIControllers')
    .controller('BuildstatsController', ['$scope', 'Campaign', 'Builds', 'Targets', '$stateParams', '$log',
        function($scope, Campaign, Builds, Targets, $stateParams, $log) {

            $log.info('init BuildstatsController');
            $('.selectpicker').selectpicker({
                size: 10
            });

            $scope.targethwmodel = '';
            $scope.branch = '';
            $scope.configname = '';
            $scope.toolchain = '';

            Builds.query({
                    t: 'distinct',
                    q: JSON.stringify({}),
                    f: 'target.hw.model'
                })
                .$promise.then(function(hardwares) {
                    $('#hardwares').html('');
                    $('#hardwares')
                        .append($('<option></option>')
                            .attr('value', 'na')
                            .text('Select value'));
                    $.each(hardwares, function(key, value) {
                        $('#hardwares')
                            .append($('<option></option>')
                                .attr('value', value)
                                .text(value));
                    });
                    $('#hardwares').selectpicker('refresh');
                });

            $('#hardwares').on('changed.bs.select', function(e) {
                $scope.targethwmodel = $(this).find("option:selected").val();
                Builds.query({
                        t: 'distinct',
                        q: JSON.stringify({
                            'target.hw.model': $scope.targethwmodel
                        }),
                        f: 'vcs.branch'
                    })
                    .$promise.then(function(branches) {
                        $('#branches').html('');
                        $('#branches')
                            .append($('<option></option>')
                                .attr('value', 'na')
                                .text('Select value'));
                        $.each(branches, function(key, value) {
                            $('#branches')
                                .append($('<option></option>')
                                    .attr('value', value)
                                    .text(value));
                        });
                        $('#branches').selectpicker('refresh');
                    });
            });

            $('#branches').on('changed.bs.select', function(e) {
                $scope.branch = $(this).find("option:selected").val();
                Builds.query({
                        t: 'distinct',
                        q: JSON.stringify({
                            'target.hw.model': $scope.targethwmodel,
                            'vcs.branch': $scope.branch
                        }),
                        f: 'configuration.name'
                    })
                    .$promise.then(function(confnames) {
                        $('#confnames').html('');
                        $('#confnames')
                            .append($('<option></option>')
                                .attr('value', 'na')
                                .text('Select value'));
                        $.each(confnames, function(key, value) {
                            $('#confnames')
                                .append($('<option></option>')
                                    .attr('value', value)
                                    .text(value));
                        });
                        $('#confnames').selectpicker('refresh');
                    });
            });

            $('#confnames').on('changed.bs.select', function(e) {
                $scope.configname = $(this).find("option:selected").val();
                Builds.query({
                        t: 'distinct',
                        q: JSON.stringify({
                            'target.hw.model': $scope.targethwmodel,
                            'vcs.branch': $scope.branch,
                            'configuration.name': $scope.configname
                        }),
                        f: 'configuration.toolchain.name'
                    })
                    .$promise.then(function(toolchains) {
                        $('#toolchains').html('');
                        $('#toolchains')
                            .append($('<option></option>')
                                .attr('value', 'na')
                                .text('Select value'));
                        $.each(toolchains, function(key, value) {
                            $('#toolchains')
                                .append($('<option></option>')
                                    .attr('value', value)
                                    .text(value));
                        });
                        $('#toolchains').selectpicker('refresh');
                    });
            });

            $('#toolchains').on('changed.bs.select', function(e) {
                $scope.toolchain = $(this).find("option:selected").val();
                Builds.query({
                        q: JSON.stringify({
                            'target.hw.model': $scope.targethwmodel,
                            'vcs.branch': $scope.branch,
                            'configuration.name': $scope.configname,
                            'configuration.toolchain.name': $scope.toolchain
                        })
                    })
                    .$promise.then(function(data) {
                        console.log(data);
                    });
            });
        }
    ]);
