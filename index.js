var express = require('express');
var winston = require('winston');
var mongoose = require('mongoose');
var moment = require('moment');
var _ = require('lodash');
var util = require('util');
var dns = require('dns');
//var Logger = require('../Logger');

function AddonGui (app, server, io, passport){

  var visitors = {'connected': {count: 0}};
  global.pubsub.on('visitor_leave', function(data){
      visitors.connected.count--;
  });
  global.pubsub.on('new_visitor', function(data){
        visitors.connected.count++;
        winston.info('new arrival: '+data.ip);
        if( !visitors[ data.ip ] ){
            visitors[ data.ip ] = {count: 0};
        }
        visitors[ data.ip ].count ++;
        dns.reverse(data.ip, function(err, hostnames){
            if( err ) {
                return;
            }
            if( hostnames.length == 1 ) {
                visitors[ data.ip ].hostname = hostnames[0];
            }
        });
  });
  global.pubsub.on('notify', function(data) {
     io.emit('notify', data);
  });

  this.register = function(){
    app.use( express.static(__dirname + '/public/') );

    app.get('/api/v0/gui/visitors', function(req, res){
        res.json(visitors);
    });

    global.pubsub.on('status.now', function(change){
      _.extend(status.now, change);
    })
    global.pubsub.on('status.now.init', function(data){
      console.log("initialize status.now values from extrernal sources");
      _.extend(status.now, data);
      console.log(status.now);
    });
  }

  this.unregister = function(){

  }

  var Result = mongoose.model('Result');

  var status = { now: {}, today: {} };

  //init today object
  _.extend(status.today, {
      passrate: 0,
      executed: 0,
      max: 100,
      failures: {
        individual: {
          count: 0,
          max: 0
        }
      }
    });

  var resultCount = function() {
    var _today = moment().startOf('day');
    var q = {'cre.time': {"$gte": _today.toDate()} };
    //q = {}
    Result.find( q , function(error, docs){
      if( error ) {
        console.error(error);
        return;
      }
      passrate = 0;
      status.today.executed = docs.length;
      var failures =  {}
      if( docs.length > 0 ){
        _.each(docs, function(doc){
          verdict = doc.exec.verdict=='pass'?1:0
          passrate += verdict;
          if( verdict === 0 ) {
            failures[ doc.tcid ] = 1;
          }
        });
        status.today.passrate = passrate / docs.length * 100;
      }
      status.today.failures.individual.count = Object.keys(failures).length;
    });
  }
  resultCount();
  setInterval( resultCount, 10000 );

  io.on('connection', function (client) {
      var ip = client.request.connection.remoteAddress;
      if(ip) {
        global.pubsub.emit('new_visitor',
          {ip: ip}
        );
      }
      client.emit('home', 'hello client');
      client.on('home', function(data){
        console.log("home: "+JSON.stringify(data));
      });
      client.broadcast.emit('home', 'new client arrived :)');
      var i=0;

      var nowStatus = function() {
        client.emit('home.today', status.today);
        client.emit('home.now', status.now);
      }
      var statusTimer = setInterval( nowStatus, 2000 );

      /*client.emit('home', 'test-'+i++);*/
      client.on('disconnect', function () {
          clearTimeout(statusTimer);
          global.pubsub.emit('visitor_leave', {ip: ip});
      });
  });


  return this;
}
//util.inherits(AddonGui, Logger);

exports = module.exports = AddonGui;
