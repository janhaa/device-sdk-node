import { Platform } from '.';

const platform = new Platform(
  process.env.PLATFORM_HOST ? process.env.PLATFORM_HOST : '',
  process.env.THING_ID ? process.env.THING_ID : '',
);
// tslint:disable-next-line:no-console
platform.on('connect', () => console.log('connected'));
// tslint:disable-next-line:no-console
platform.on('method-invocation', call => console.log(call));

platform.connect();
