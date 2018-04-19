'use strict';

class ExampleClass {
    constructor() {
        this.myString = 'class example';
        this.myMethod();
    }

    myMethod() {
        return `this is a ${this.myString}`;
    }
}

module.exports = ExampleClass;
