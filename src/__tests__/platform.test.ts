import { Platform } from '../';

test('Platform interface', () => {
  expect(Object.getOwnPropertyNames(Platform.prototype)).toContain('connect');
});
