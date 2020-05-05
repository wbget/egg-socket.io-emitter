'use strict';

const mock = require('egg-mock');

describe('test/socket.io-emitter.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/socket.io-emitter-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, socketIoEmitter')
      .expect(200);
  });
});
