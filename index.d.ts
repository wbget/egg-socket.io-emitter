import { SocketIOEmitter } from 'socket.io-emitter';

declare module 'egg' {
  interface Application {
    emitter: SocketIOEmitter;
  }
}
