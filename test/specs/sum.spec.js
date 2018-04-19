const sum = require('../../app/scripts/inits/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 2 + 22 to equal 24', () => {
  expect(sum(2, 22)).toBe(24);
});
