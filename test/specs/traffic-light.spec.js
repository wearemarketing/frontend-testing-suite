/*
* https://www.codewars.com/kata/thinkful-logic-drills-traffic-light
* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
*
* Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
*
* For example, updateLight('green') should return 'yellow'.
*/

import each from 'jest-each';
import updateLight from 'inits/traffic-light';

describe('Traffic light', () => {
    test('Changes changes to green', () => {
        var action = updateLight('green');

        expect(action).toBe('yellow');
    });

    test('Changes changes to yellow', () => {
        var action = updateLight('yellow');

        expect(action).toBe('red');
    });

    test('Changes changes to red', () => {
        var action = updateLight('red');

        expect(action).toBe('green');
    });

    each([
        ['green', 'yellow'],
        ['yellow', 'red'],
        ['red', 'green']
    ]).test('Changes from %s to %s', (a, result) => {
        var action = updateLight(a);

        expect(action).toBe(result);
    });
});
