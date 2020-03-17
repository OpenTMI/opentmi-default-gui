const express = require('express');
const {Addon} = require('opentmi-addon');
const Controller = require('./controllers');

class AddonDefaultGui extends Addon {
  constructor(...args) {
    // Defined variables
    super(...args);
    this.router = express.Router();
    this.staticPath = { prefix: '/', folder: '/public/' };
  }

  // Default implementation of register
  register() {
    this.logger.warn('registering instance of default-gui class');
    this._controller = new Controller({
      server: this.server,
      io: this.io,
      logger: this.logger,
      eventBus: this.eventBus,
      mongoose: this.mongoose
    });
    this.router.get('/api/v0/gui/visitors', this._controller.getVisitors.bind(this._controller));
    this.router.get('/api/v0/gui/stats/results/today', this._controller.getTodayResults.bind(this._controller));
    this.io.on('connection', this._controller.ioConnection.bind(this._controller));

  }
  unregister() {
    logger.warn('unregistering instance of default-gui class');
  }
}


module.exports = AddonDefaultGui;

