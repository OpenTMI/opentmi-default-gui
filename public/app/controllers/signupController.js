angular.module('OpenTMIControllers')
  .controller('SignupController', 
    function($scope, $location, $auth, noty) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $location.path('');
          var msg = 'You have successfully created a new account and have been signed-in';
          noty.success(msg);
        })
        .catch(function(response) {
          var msg = response.data.message;
          noty.error(msg);
        });
    };
  });