var express = require('express');

function AddonGui (app, passport){

  this.name = 'default gui';
  this.description = 'Example GUI for TMT';
  
  this.register = function(){
    app.use( express.static(__dirname + '/public/') );
  }

  this.unregister = function(){

  }
  return this;
}

exports = module.exports = AddonGui;