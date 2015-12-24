'use strict';

angular.module('OpenTMIControllers')
  .controller('LoginController', function($scope, $location, $auth, noty) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
          var msg = 'You have successfully signed in!';
          noty.success(msg);
          console.log(msg);
          $location.path('#');
        })
        .catch(function(error) {
          var msg = error.data.message;
          console.log(msg || error);
          noty.error(error.data.message);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          var msg = 'You have successfully signed in with ' + provider + '!';
          noty.success(msg);
          $location.path('');
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            noty.error(error.error);
          } else if (error.data) {
            // HTTP response error from server
            noty.error(error.data.message);
            console.log(error.data.message || error );
          } else {
            noty.error(error);
          }
        });
    };
  });