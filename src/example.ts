import { Platform } from '.';

const platform = new Platform(
  process.env.PLATFORM_HOST ? process.env.PLATFORM_HOST : '',
  process.env.THING_ID ? process.env.THING_ID : '',
);

platform.on('authenticated', () => {
  // tslint:disable-next-line:no-console
  console.log('authenticated');
  platform.setAttributeValue('occupancyState', 2);
});
// tslint:disable-next-line:no-console
platform.on('method-invocation', call => console.log(call));

platform.connect();
