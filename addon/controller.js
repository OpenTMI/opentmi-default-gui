const moment = require('moment')
const _ = require('lodash')
const dns = require('dns')

class DefaultGuiController {
  constructor({ server, io, logger, eventBus, mongoose }) {
    this.Result = mongoose.model('Result')
    this._io = io
    this._server = server
    this.logger = logger
    this.eventBus = eventBus
    this.visitors = {
      'connected': {
        count: 0,
        clients: {}
      }
    }
    this.status = {
      now: {},
      today: {
        passrate: 0,
        executed: 0,
        max: 100,
        failures: {
          individual: {
            count: 0,
            max: 0
          }
        }
      }
    }
    logger.debug('start listening eventBus events')
    eventBus.on('new_visitor', this.onNewVisitor.bind(this))
    eventBus.on('visitor_leave', this.onVisitorLeave.bind(this))
    eventBus.on('notify', this.onNotify.bind(this))
    eventBus.on('status.now', this.onStatusNow.bind(this))
    eventBus.on('status.now.init', this.onStatusNowInit.bind(this))
  }

  background() {
    const EVERY_MINUTES = 1
    setInterval(this.resultCount.bind(this), 1000 * 60 * EVERY_MINUTES)
  }

  onVisitorLeave(meta, data) {
    this.visitors.connected.count--
    if (this.visitors.connected.count === 0) {
      _.unset(this.visitors.connected.clients, data.ip)
    }
  }
  onNewVisitor(meta, data) {
    this.visitors.connected.count++
    this.logger.info('new arrival: ' + data.ip)
    if (!this.visitors.connected.clients[ data.ip ]) {
      this.visitors.connected.clients[ data.ip ] = { count: 0 }
    }
    this.visitors.connected.clients[ data.ip ].count++
    dns.reverse(data.ip, (err, hostnames) => {
      if (err) {
        return
      }
      if (hostnames.length === 1) {
        this.visitors.connected.clients[ data.ip ].hostname = hostnames[0]
      }
    })
  }
  onNotify(meta, data) {
    this._io.emit('notify', data)
  }
  getVisitors(req, res) {
    this.visitors.pendingRequests = 0
    this._server.getConnections((error, count) => {
      if (count) {
        this.visitors.pendingRequests = count
      }
      res.json(this.visitors)
    })
  }
  onStatusNow(meta, change) {
    _.extend(this.status.now, change)
  }

  onStatusNowInit(data) {
    this.logger.silly('initialize status.now values from extrernal sources')
    _.extend(this.status.now, data)
    this.logger.silly(this.status.now)
  }
  getTodayResults(req, res) {
    this.resultCount()
      .then(status => res.json(status))
      .catch(error => {
        this.logger.error(error)
        res.status(500).json({ error })
      })
  }
  resultCount() {
    const _today = moment().startOf('day')
    const q = { 'cre.time': { '$gte': _today.toDate() }}
    return this.Result.find(q).select('exec.verdict tcid').exec()
      .then(docs => {
        let passrate = 0
        this.status.today.executed = docs.length
        const failures = {}
        if (docs.length > 0) {
          _.each(docs, (doc) => {
            const verdict = doc.exec.verdict === 'pass' ? 1 : 0
            passrate += verdict
            if (verdict === 0) {
              failures[ doc.tcid ] = 1
            }
          })
          this.status.today.passrate = passrate / docs.length * 100
        }
        this.status.today.failures.individual.count = Object.keys(failures).length
        return this.status.today
      })
  }

  ioConnection(client) {
    const ip = client.request.connection.remoteAddress
    this.logger.debug('ioConnection')
    if (ip) {
      this.eventBus.emit('new_visitor', { ip: ip })
    }
    client.emit('home', 'hello client')
    client.on('home', (data) => {
      this.logger.debug('home: ' + JSON.stringify(data))
    })
    client.broadcast.emit('home', 'new client arrived :)')
    const emitNowStatus = () => {
      client.emit('home.today', _.cloneDeep(this.status.today))
      client.emit('home.now', _.cloneDeep(this.status.now))
    }
    const statusTimer = setInterval(emitNowStatus, 2000)

    client.on('disconnect', () => {
      clearTimeout(statusTimer)
      this.eventBus.emit('visitor_leave', { ip: ip })
    })
  }
}

module.exports = DefaultGuiController
