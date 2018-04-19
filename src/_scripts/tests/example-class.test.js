'use strict';

import ExampleClass from '../modules/example-class.js';

let superClass = new ExampleClass();

test('Returns a correct string from a class', () => {
  expect(superClass()).toMatch(/this is a class example/);
});
