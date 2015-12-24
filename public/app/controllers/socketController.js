'use strict';

angular
  .module('OpenTMIControllers')
  .factory('socket', function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
  });