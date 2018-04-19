export default class FizzBuzz {
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
