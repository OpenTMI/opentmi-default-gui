var express = require('express');

function AddonGui (app, passport){
  app.use( express.static(__dirname + '/public/') );
}

exports = module.exports = AddonGui;