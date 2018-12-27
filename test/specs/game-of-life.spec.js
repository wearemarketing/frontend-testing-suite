import each from 'jest-each';
import GameOfLife from 'inits/game-of-life';
import Cell from 'inits/cell';

const DEAD = false;
const ALIVE = true;

describe('Game Of Life', () => {

    test('An alive cell dies when has 0 neighbours', () => {
        var cell = new Cell({neighboursNumber: 0, status: ALIVE});
        expect(cell.isAlive()).toBe(false);
    });

    test('A cell dies when has 1 neighbours', () => {
        var cell = new Cell({neighboursNumber: 1});
        expect(cell.isAlive()).toBe(false);
    });

    test('A cell lives when has 2 neighbours', () => {
        var cell = new Cell({neighboursNumber: 2});
        expect(cell.isAlive()).toBe(true);
    });

    test('A cell lives when has 3 neighbours', () => {
        var cell = new Cell({neighboursNumber: 3});
        expect(cell.isAlive()).toBe(true);
    });

    test('A cell dies when has 4 neighbours', () => {
        var cell = new Cell({neighboursNumber: 4});
        expect(cell.isAlive()).toBe(false);
    });

    test('A cell dies when has 5 neighbours', () => {
        var cell = new Cell({neighboursNumber: 5});
        expect(cell.isAlive()).toBe(false);
    });

    test('A dead cell remains dead when has 0 neighbours', () => {
        var cell = new Cell({neighboursNumber: 0, status: DEAD});
        expect(cell.isAlive()).toBe(false);
    });

    test('A dead cell still dead when has 2 neighbours', () => {
        var cell = new Cell({neighboursNumber: 2, status: DEAD});
        expect(cell.isAlive()).toBe(false);
    });

    test('A dead cell is reborn when has 3 neighbours', () => {
        var cell = new Cell({neighboursNumber: 3, status: DEAD});
        expect(cell.isAlive()).toBe(true);
    });
});
