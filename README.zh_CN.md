# egg-socket.io-emitter

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-socket.io-emitter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-socket.io-emitter
[travis-image]: https://img.shields.io/travis/eggjs/egg-socket.io-emitter.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-socket.io-emitter
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-socket.io-emitter.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-socket.io-emitter?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-socket.io-emitter.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-socket.io-emitter
[snyk-image]: https://snyk.io/test/npm/egg-socket.io-emitter/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-socket.io-emitter
[download-image]: https://img.shields.io/npm/dm/egg-socket.io-emitter.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-socket.io-emitter

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

| egg-socket.io-emitter 版本 | egg 1.x |
| -------------------------- | ------- |
| 1.x                        | 😁      |
| 0.x                        | ❌      |

### 依赖的插件

egg-redis

## 开启插件

```js
// config/plugin.js
exports.socketIoEmitter = {
  enable: true,
  package: 'egg-socket.io-emitter',
};
```

## 使用场景

[socket.io-emmiter](https://github.com/socketio/socket.io-emitter) for egg

## License

[MIT](LICENSE)
