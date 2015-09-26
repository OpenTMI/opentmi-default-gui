var express = require('express');
var winston = require('winston');
var mongoose = require('mongoose');
var moment = require('moment');
var _ = require('underscore');

function AddonGui (app, server, io, passport){

  this.name = 'default gui';
  this.description = 'Example GUI for TMT';
  
  this.register = function(){
    app.use( express.static(__dirname + '/public/') );
  }

  this.unregister = function(){

  }

  var Result = mongoose.model('Result');


  io.on('connection', function (socket) {
      winston.info('new arrival! :)');
      socket.emit('home', 'hello client');
      socket.on('home', function(data){
        console.log(data);
      });
      socket.broadcast.emit('home', 'new client arrived :)');
      var i=0;
      var today = {
        passrate: 0,
        max: 1,
        executed: 0,
        failures: {
          individual: {
            count: 0,
            max: 0
          }
        }
      }

      var resultCount = function() {
        var _today = moment().startOf('day');
        var q = {'cre.time': {"$gte": _today.toDate()} };
        //q = {}
        Result.find( q , function(error, docs){
          if( error ) {
            winston.error(error);
            return;
          }
          passrate = 0;
          today.executed = docs.length;
          var failures =  {}
          if( docs.length > 0 ){
            _.each(docs, function(doc){
              verdict = doc.exec.verdict=='pass'?1:0
              passrate += verdict;
              if( verdict === 0 ) {
                failures[ doc.tcid ] = 1;
              }
            });
            today.passrate = passrate / docs.length;
          }
          today.failures.individual.count = Object.keys(failures).length;
          socket.emit('home.today', today);

        });
      }
      setInterval( resultCount, 1000 );

      setInterval(function(){
        socket.emit('home', 'test-'+i++);
      }, 1000);
  });

  return this;
}

exports = module.exports = AddonGui;