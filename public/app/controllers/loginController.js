'use strict';

angular
  .module('tmtControllers')
  .controller("LoginController", LoginController);

  LoginController.$inject = ['$location', 'AuthenticationService'];
  function LoginController($scope, $location, AuthenticationService) {
    //http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
    var vm = $scope.vm = {
      login: login
    };
    function login() {
        vm.dataLoading = true;
        AuthenticationService.Login(
          vm.username, vm.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials(vm.username, vm.password);
                $location.path('/');
            } else {
                FlashService.Error(response.message);
                vm.dataLoading = false;
            }
        });
    };
  }