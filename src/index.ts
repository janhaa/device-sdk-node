import * as io from 'socket.io-client';
import { EventEmitter } from 'events';

class Platform extends EventEmitter {
  socket: SocketIOClient.Socket;

  constructor(host: string) {
    super();
    this.socket = io(host);
  }

  connect() {
    this.socket.connect();

    this.registerWebsocketEvents();
  }

  private registerWebsocketEvents() {
    const events = ['connect', 'disconnect', 'event', 'connect_error', 'connect_timeout', 'methodCall'];

    events.forEach(event => {
      this.socket.on(event, (...parameters: object[]) => this.emit(event, ...parameters));
    });
  }
}

export { Platform };
