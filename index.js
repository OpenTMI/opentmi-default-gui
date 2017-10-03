const express = require('express');
const logger = require('../../tools/logger');

const Controller = require('./controllers');

class AddonDefaultGui {
  constructor(app, server, io) {
    // Defined variables
    this.router = express.Router();
    this.staticPath = { prefix: '/', folder: '/public/' };

    // Own variables
    this.server = server;
    this.io = io;
    this._controller = new Controller(io);
  }

  // Default implementation of register
  register() {
    logger.warn('registering instance of sample class');
    this.router.get('/api/v0/gui/visitors', this._controller.getVisitors.bind(this._controller));
  }
  unregister() {
    logger.warn('unregistering instance of sample class');
  }
}


module.exports = AddonDefaultGui;

