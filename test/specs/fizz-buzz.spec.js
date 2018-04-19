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
    ]).test('plays with numbers', (a, b) => {
        // Asset
        var fizzBuzz = new FizzBuzz();

        // Action
        var result = fizzBuzz.playsWith(a);

        // Assert
        expect(result).toBe(b);
    });
})
