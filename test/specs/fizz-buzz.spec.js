import each from 'jest-each';
import FizzBuzz from 'inits/fizz-buzz';

describe('Fizzbuzz game', () => {
    each([
        [1, 1],
        [2, 2],
        [3, 'Fizz'],
        [5, 'Buzz'],
        [6, 'Fizz'],
        [10, 'Buzz'],
        [15, 'Fizz Buzz']
    ]).test('plays with number %s', (a, result) => {
        // Asset
        var fizzBuzz = new FizzBuzz();

        // Action
        var action = fizzBuzz.playsWith(a);

        // Assert
        expect(action).toBe(result);
    });
})
