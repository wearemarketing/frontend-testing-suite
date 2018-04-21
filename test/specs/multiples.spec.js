/*
 * Multiples of 3 and 5
 * Return the sum of all multiples of 3 or 5 below the given number
 */

import each from 'jest-each';
import Multiples from 'inits/multiples.js';
let multiples = new Multiples();


describe('Multiples plays', () => {
    test('with number 3', () => {
        var action = multiples.playsWith(3);

        expect(action).toBe(3);
    });

    test('with number 5', () => {
        var multiples = new Multiples();
        var action = multiples.playsWith(5);

        expect(action).toBe(8);
    });

    test('with number 10', () => {
        var multiples = new Multiples();
        var action = multiples.playsWith(10);

        expect(action).toBe(33);
    });
});
