'use strict';
let example = require('../modules/example.js');

test('Returns a correct string from a function', () => {
  expect(example('module')).toBe('this is a module');
});
