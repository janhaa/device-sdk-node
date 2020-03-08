import * as io from 'socket.io-client';
import { EventEmitter } from 'events';

type InvocationResult = {
  invocationId: number;
  result: any;
};

class Platform extends EventEmitter {
  socket: SocketIOClient.Socket;
  thingId: string;

  constructor(host: string, thingId: string) {
    super();
    this.socket = io(host);
    this.thingId = thingId;

    this.setupEventForwarding();
    this.socket.on('connect', () => {
      this.socket.emit('auth', { id: this.thingId });
    });
  }

  connect() {
    this.socket.connect();
  }

  emitMethodInvocationResult(result: InvocationResult) {
    this.socket.emit('method-invocation-result', result);
  }

  private setupEventForwarding() {
    const events = ['connect', 'disconnect', 'event', 'connect_error', 'connect_timeout', 'method-invocation'];

    events.forEach(event => {
      this.socket.on(event, (...parameters: object[]) => this.emit(event, ...parameters));
    });
  }
}

export { Platform };
