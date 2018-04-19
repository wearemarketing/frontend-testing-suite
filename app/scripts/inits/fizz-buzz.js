export default class FizzBuzz {
    constructor() {
        this.fizz = 'Fizz';
        this.buzz = 'Buzz';
    }

    playsWith(n) {
        if (this.divisibleBy3(n) && this.divisibleBy5(n)) {
            return `${this.fizz} ${this.buzz}`;
        }

        if (this.divisibleBy3(n)) {
            return this.fizz;
        }

        if (this.divisibleBy5(n)) {
            return this.buzz;
        }

        return n;
    }

    divisibleBy3(n) {
        return n % 3 == 0;
    }

    divisibleBy5(n) {
        return n % 5 == 0;
    }
}
