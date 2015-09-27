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

    global.pubsub.on('jenkins.computers', function(data){
      status.now.jenkins.slaves.count = data.totalExecutors;
      status.now.jenkins.slaves.active = data.busyExecutors;
      status.now.jenkins.master.alive = 1;
    });
    global.pubsub.on('jenkins.jobs', function(data){
      status.now.jenkins.jobs.count = data.length;
      status.now.jenkins.jobs.active = data.length/2;
      console.log(status.now.jenkins);
    });
    global.pubsub.on('github', function(data){
      status.github = data;
      status.github.total_repos = data.public_repos+data.private_repos;
      console.log(data);
    })
  }

  this.unregister = function(){

  }

  var Result = mongoose.model('Result');

  var status = {
    now: {
      jenkins: {
        master: {
          alive: 0
        },
        slaves: { 
          active: 0,
          count: 0
        },
        jobs: {
          count: 0,
          active: 0   
        }
      }
    },
    today: {
      passrate: 0,
      max: 1,
      executed: 0,
      failures: {
        individual: {
          count: 0,
          max: 0
        }
      }
    },
    github: {
      public_repos: 0,
      total_private_repos: 0,
      total_repos: 0
    }
  };
  
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
        status.today.passrate = passrate / docs.length;
      }
      status.today.failures.individual.count = Object.keys(failures).length;
    });
  }
  resultCount();
  //setInterval( resultCount, 2000 );

  io.on('connection', function (client) {
      winston.info('new arrival: '+client.request.connection.remoteAddress);
      client.emit('home', 'hello client');
      client.on('home', function(data){
        console.log(data);
      });
      client.broadcast.emit('home', 'new client arrived :)');
      var i=0;

      var nowStatus = function() {
        client.emit('home.today', status.today);
        client.emit('home.now', status.now);
        client.emit('home.github', status.github)
      }
      setInterval( nowStatus, 2000 );

      setInterval(function(){
        client.emit('home', 'test-'+i++);
      }, 1000);
  });

  return this;
}

exports = module.exports = AddonGui;
