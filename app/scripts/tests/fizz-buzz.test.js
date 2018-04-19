import each from 'jest-each';

class FizzBuzz {
    constructor() {
        this.fizz = 'Fizz';
        this.buzz = 'Buzz';
    }

    playsWith(n) {
        if(n % 3 == 0 && n % 5 == 0) {
            return `${this.fizz} ${this.buzz}`;
        }

        if(n % 3 == 0){
            return this.fizz;
        }

        if(n % 5 == 0) {
            return this.buzz;
        }

        return n;
    }
}

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
