angular.module('OpenTMI')
  .controller('LogoutController', function($location, $auth, noty) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        noty.success('You have been logged out');
        $location.path('/');
      });
  });