import each from 'jest-each';
import GameOfLife from 'inits/game-of-life';
import Cell from 'inits/cell';

const DEAD = false;

describe('Game Of Life', () => {

    test('a live cell has no neighbours', () => {
        var cell = new Cell();
        expect(cell.neighbours()).toBe(0);
    });

    test('a live cell has 1 neightbour', () => {
        var cell = new Cell({neighboursNumber: 1});
        expect(cell.neighbours()).toBe(1);
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

    test('A dead cell still dead when has 2 neighbours', () => {
        var cell = new Cell({neighboursNumber: 2, status: DEAD});
        expect(cell.isAlive()).toBe(false);
    });

    test('A dead cell is reborn when has 3 neighbours', () => {
        var cell = new Cell({neighboursNumber: 3, status: DEAD});
        expect(cell.isAlive()).toBe(true);
    });
});
