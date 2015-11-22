'use strict';

angular
  .module('tmtControllers')
  .factory('socket', function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
  });