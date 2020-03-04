import { Platform } from '.';

const platform = new Platform(process.env.PLATFORM_HOST ? process.env.PLATFORM_HOST : '');
// tslint:disable-next-line:no-console
platform.on('connect', () => console.log('connected'));
// tslint:disable-next-line:no-console
platform.on('methodCall', call => console.log(call));

platform.connect();
