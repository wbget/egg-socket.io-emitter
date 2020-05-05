'use strict';

const assert = require('assert');
const io = require('socket.io-emitter');

module.exports = app => {
  assert(app.redis !== null);
  // 做启动应用前的检查
  const emitter = io(app.redis);
  app.emitter = emitter;
  app.coreLogger.info('[egg-socket.io-emitter] init success');
};
